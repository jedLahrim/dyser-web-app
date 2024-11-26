import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const trackTransactions = (state: AppState) => state.transactions;

export const selectTransactions = createSelector(
  trackTransactions,
  (state) => state.transactions,
);
export const selectTransactionsSuccess = createSelector(
  trackTransactions,
  (state) => state.transactions,
);
export const selectTransactionsFailure = createSelector(
  trackTransactions,
  (state) => state.transactions,
);
