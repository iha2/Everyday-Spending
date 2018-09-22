import axios from 'axios';
import { from } from 'rxjs';

import { Customer } from './http.types';

const TDHeaders = {
  headers: {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiNDhhZmIyZTgtYjZmNS0zOWQ1LWEyNDgtYmExZGExZjVkMTIyIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiIyM2MxZjkyNy0wMzQyLTRlN2ItODU2ZS05YjVkODAyMDgxYTcifQ.pq0tZwFHm_Ahqo1RhcwixfiIE8feKKMTXekL3qvUw60'
  }
};

const TDUrl = "https://api.td-davinci.com/api";
const customersUrl = `${TDUrl}/customers`;



export const getCustomer = (customer: string) => from(axios.get<Customer>(`${customersUrl}/${customer}`, TDHeaders));
