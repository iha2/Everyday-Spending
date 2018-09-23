import { ofType, combineEpics, ActionsObservable } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

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
      payload: { transactions: res.data.result }
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
