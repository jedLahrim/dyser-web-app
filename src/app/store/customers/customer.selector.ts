// src/app/store/selectors/Customer.selectors.ts
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const trackCustomers = (state: AppState) => state.customers;

export const selectCustomers = createSelector(
  trackCustomers,
  (state) => state.customers,
);
// export const selectCustomerState = createFeatureSelector<TransactionState>('customers');

// export const selectAllCustomers = createSelector(selectCustomerState, state => state.customers);
// export const selectCustomerLoading = createSelector(selectCustomerState, state => state.loading);
// export const selectCustomerError = createSelector(selectCustomerState, state => state.error);
