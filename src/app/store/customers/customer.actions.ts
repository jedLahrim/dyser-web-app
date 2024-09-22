// src/app/store/actions/Customer.actions.ts
import { createAction, props } from '@ngrx/store';
import { Customer } from '../../apis/customers/models/customer.model';

export const loadCustomers = createAction('[Customer List] Load Customers');
export const loadCustomersSuccess = createAction('[Customer List] Load Customers Success', props<{
  customers: Customer[]
}>());
export const loadCustomersFailure = createAction('[Customer List] Load Customers Failure', props<{ error: any }>());

export const addCustomer = createAction('[Customer List] Add Customer', props<{ customer: Customer }>());
export const updateCustomer = createAction('[Customer List] Update Customer', props<{ customer: Customer }>());
export const deleteCustomer = createAction('[Customer List] Delete Customer', props<{ customerId: string }>());
