import { ofType, combineEpics, ActionsObservable } from 'redux-observable';
import { map, mergeMap, tap } from 'rxjs/operators';

import { merchantCategories } from '../../config';
import { getAllTransactions, getCustomer } from '../../backend/http.service';

export enum CustomerActions {
  FETCH_CUSTOMER_REQUEST = 'FETCH_CUSTOMER_REQUEST',
  FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS',
  FETCH_CUSTOMER_TRANSACTIONS_REQUEST = 'FETCH_CUSTOMER_TRANSACTIONS_REQUEST',
  FETCH_CUSTOMER_TRANSACTIONS_SUCCESS = 'FETCH_CUSTOMER_TRANSACTIONS_SUCCESS',
  SET_STARBUCKS_OFFER = 'SET_STARBUCKS_OFFER',
  SET_TIMS_OFFER = 'SET_TIMS_OFFER'
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
    tap(x => console.log(x.data)),
    map(result => ({
      type: CustomerActions.FETCH_CUSTOMER_TRANSACTIONS_SUCCESS,
      payload: {
        transactions: result.data.result.filter(transaction =>
          merchantCategories.find(
            merchant => merchant === transaction.categoryTags[0]
          )
        ),
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
  offers: [
    {
      merchantId: '1ecc6c9f-ffe7-47d3-9697-78d299b17996',
      minSpendAmount: 50,
      lifeSpan: 'week',
      multiplier: 2
    },
    {
      merchantId: 'e84dcb0a-1a9b-4df6-9f39-9e1f55a92575',
      minSpendAmount: 15,
      lifeSpan: 'week',
      multiplier: 3
    }
  ],
  transactions: []
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
    case CustomerActions.SET_STARBUCKS_OFFER:
      return {
        ...state,
        offers: state.offers.splice(2, 1, {
          merchantId: 'a3c83ad2-6ac5-47ad-9adc-b8f93bfaf8ae',
          minSpendAmount: 30,
          lifeSpan: 'week',
          multiplier: 3
        })
      };
    case CustomerActions.SET_TIMS_OFFER:
      return {
        ...state,
        offers: state.offers.splice(2, 1, {
          merchantId: 'e1db0402-57e1-47be-9b31-f56b6271e6e0',
          minSpendAmount: 30,
          lifeSpan: 'week',
          multiplier: 3
        })
      };
    default:
      return state;
  }
};
