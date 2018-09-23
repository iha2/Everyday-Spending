import { ofType, combineEpics, ActionsObservable } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

// import { merchantCategories } from '../../config';
import { getAllTransactions, getCustomer } from '../../backend/http.service';

export enum CustomerActions {
  FETCH_CUSTOMER_REQUEST = 'FETCH_CUSTOMER_REQUEST',
  FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS',
  FETCH_CUSTOMER_TRANSACTIONS_REQUEST = 'FETCH_CUSTOMER_TRANSACTIONS_REQUEST',
  FETCH_CUSTOMER_TRANSACTIONS_SUCCESS = 'FETCH_CUSTOMER_TRANSACTIONS_SUCCESS'
}

export const customerDataActions = {
  fetchCustomerData: (customer: string) => ({
    type: CustomerActions.FETCH_CUSTOMER_REQUEST,
    customer
  }),
  fetchCustomerTransactionsData: (customer: string) => ({
    type: CustomerActions.FETCH_CUSTOMER_TRANSACTIONS_REQUEST,
    customer
  })
};

export const fetchCustomerDataEpic = (action$: ActionsObservable<any>) => {
  return action$.pipe(
    ofType(CustomerActions.FETCH_CUSTOMER_REQUEST),
    mergeMap(({ customer }) => getCustomer(customer)),
    map(res => ({
      type: CustomerActions.FETCH_CUSTOMER_SUCCESS,
      payload: { customer: res.data.result }
    }))
  );
};

export const fetchCustomerTransactionsDataEpic = (
  action$: ActionsObservable<any>
) => {
  return action$.pipe(
    ofType(CustomerActions.FETCH_CUSTOMER_TRANSACTIONS_REQUEST),
    mergeMap(({ customer }) => getAllTransactions(customer)),
    map(res => ({
      type: CustomerActions.FETCH_CUSTOMER_TRANSACTIONS_SUCCESS,
      payload: {
        transactions: res.data.result,
        // .filter(transaction =>
        //   merchantCategories.find(
        //     merchant => merchant === transaction.categoryTags[0]
        //   )
        // ),
        merchants: {
          names: [
            { Starbucks: 'a3c83ad2-6ac5-47ad-9adc-b8f93bfaf8ae' },
            { 'Tim Hortons': 'e1db0402-57e1-47be-9b31-f56b6271e6e0' }
          ],
          byId: {
            'a3c83ad2-6ac5-47ad-9adc-b8f93bfaf8ae': 'Starbucks',
            'e1db0402-57e1-47be-9b31-f56b6271e6e0': 'Tim Hortons'
          }
        }
      }
    }))
  );
};

const initialState = {
  customer: {},
  transactions: {}
};

export const customerDataEpic = combineEpics(
  fetchCustomerDataEpic,
  fetchCustomerTransactionsDataEpic
);

export const customerDataReducer = (
  state: any = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case CustomerActions.FETCH_CUSTOMER_SUCCESS:
      return { ...state, ...payload };
    case CustomerActions.FETCH_CUSTOMER_TRANSACTIONS_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
