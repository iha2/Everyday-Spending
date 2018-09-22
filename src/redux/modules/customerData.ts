import { ofType, combineEpics, ActionsObservable } from 'redux-observable';
import { map } from 'rxjs/operators';
// import { from, of } from 'rxjs';

export enum CustomerActions {
  FETCH_CUSTOMER_REQUEST = 'FETCH_CUSTOMER_REQUEST',
  FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS'
}

export const fetchCustomerData = (action$: ActionsObservable<any>) => {
  return action$.pipe(
    ofType(CustomerActions.FETCH_CUSTOMER_REQUEST),
    map(() => ({
      type: CustomerActions.FETCH_CUSTOMER_SUCCESS,
      payload: { data: 'customer' }
    }))
    // mergeMap(({ payload }) =>
    //   from(postPrediction(payload.image)).pipe(
    //     map(res => {
    //       return {
    //         type: ModelActionTypes.PREDICT_SUCCESS,
    //         payload: res.data
    //       };
    //     }),
    //     catchError(error => of(predictionError(error, payload)))
    //   )
    // )
  );
};

const initialState = {
  customer: []
};

export const customerDataEpic = combineEpics(fetchCustomerData);

export const customerDataReducer = (
  state: any = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case CustomerActions.FETCH_CUSTOMER_SUCCESS:
      return { state, ...payload.customer };
    default:
      return state;
  }
};
