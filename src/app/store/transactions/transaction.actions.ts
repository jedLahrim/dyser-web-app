import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../apis/transactions/models/transaction.model';

export const loadTransactions = createAction('[Transaction List] Load Transactions');
export const loadTransactionsSuccess = createAction('[Transaction List] Load Transactions Success', props<{
  transactions: Transaction[]
}>());
export const loadTransactionsFailure = createAction('[Transaction List] Load Transactions Failure', props<{
  error: any
}>());

export const addTransaction = createAction('[Transaction List] Add Transaction', props<{ transaction: Transaction }>());
export const updateTransaction = createAction('[Transaction List] Update Transaction', props<{
  transaction: Transaction
}>());
export const deleteTransaction = createAction('[Transaction List] Delete Transaction', props<{
  transactionId: string
}>());
