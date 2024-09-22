// src/app/store/reducers/Customer.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { deleteCustomer, loadCustomers } from './customer.actions';
import { CustomerState, customerState } from './customer.state';

export const customerReducer = createReducer(
  customerState,
  on(loadCustomers, state => ({ ...state, loading: true })),
  // on(loadCustomersSuccess, (state, { customers }) => ({ ...state, loading: false, customers })),
  // on(loadCustomersFailure, (state, { error }) => ({ ...state, loading: false, error })),
  // on(addCustomer, (state, { customers }) => ({ ...state, customers: [...state.customers, customers] })),
  // on(updateCustomer, (state, { customers }) => ({
  //   ...state,
  //   customers: state.customers.map(p => (p.id === customers.id ? customers : p)),
  // })),
  on(deleteCustomer, (state: CustomerState, { customerId }) => ({
    ...state,
    customers: state.customers.filter(customer => customer.id !== customerId),
  })),
);
