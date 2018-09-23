import axios from 'axios';
import { from } from 'rxjs';

import { CustomerResponse, TransactionResponse } from './http.types';
import { TDHeaders, customersUrl } from '../config';

export const getAllTransactions = (customer: string) =>
  from(
    axios.get<TransactionResponse>(`${customersUrl}/${customer}/transactions`, TDHeaders)
  );

export const getCustomer = (customer: string) =>
  from(axios.get<CustomerResponse>(`${customersUrl}/${customer}`, TDHeaders));
