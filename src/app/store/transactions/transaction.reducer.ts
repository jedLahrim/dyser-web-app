import { createReducer, on } from '@ngrx/store';
import {
  deleteTransaction,
  loadTransactions,
  loadTransactionsFailure,
  loadTransactionsSuccess,
} from './transaction.actions';
import { transactionState, TransactionState } from './transaction.state';

export const transactionReducer = createReducer(
  transactionState,
  on(loadTransactions, state => ({ ...state, loading: true })),
  on(loadTransactionsSuccess, (state, action) => ({ ...state, transactions: action.transactions })),
  on(loadTransactionsFailure, (state, action) => ({ ...state, error: action.error })),
  on(deleteTransaction, (state: TransactionState, { transactionId }) => ({
    ...state,
    transactions: state.transactions.filter(transaction => transaction.id !== transactionId),
  })),
);
