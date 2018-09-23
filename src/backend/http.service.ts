import axios from 'axios';
import { from } from 'rxjs';

import { Customer } from './http.types';
import { TDHeaders, customersUrl } from '../config';

export const getAllTransactions = (customer: string) =>
  from(
    axios.get<Customer>(`${customersUrl}/${customer}/transactions`, TDHeaders)
  );

export const getCustomer = (customer: string) =>
  from(axios.get<Customer>(`${customersUrl}/${customer}`, TDHeaders));
