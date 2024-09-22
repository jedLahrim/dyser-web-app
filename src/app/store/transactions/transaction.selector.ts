import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const trackTransactions = (state: AppState) => state.transactions;

export const selectTransactions = createSelector(
  trackTransactions,
  (state) => state.transactions,
);
