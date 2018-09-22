import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { customerDataEpic, customerDataReducer } from './modules/customerData';

export const rootEpic = combineEpics(customerDataEpic);

export const rootReducer = combineReducers({
  customerDataReducer
});
