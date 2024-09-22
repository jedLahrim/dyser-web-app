import { Transaction } from '../../apis/transactions/models/transaction.model';
import { TransactionService } from '../../apis/transactions/service/transaction.service';

export interface TransactionState {
  transactions: Transaction[];
  isChecked: boolean;
  loading: boolean;
  error: string | null;
}

export const transactionState: TransactionState = {
  transactions: TransactionService.transactionList,
  isChecked: false,
  loading: false,
  error: null,
};
