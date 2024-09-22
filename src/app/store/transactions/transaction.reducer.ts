import { createReducer, on } from '@ngrx/store';
import { deleteTransaction, loadTransactions } from './transaction.actions';
import { transactionState, TransactionState } from './transaction.state';

export const transactionReducer = createReducer(
  transactionState,
  on(loadTransactions, state => ({ ...state, loading: true })),
  on(deleteTransaction, (state: TransactionState, { transactionId }) => ({
    ...state,
    transactions: state.transactions.filter(transaction => transaction.id !== transactionId),
  })),
);
