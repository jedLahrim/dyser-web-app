import { CustomerState } from './customers/customer.state';
import { TransactionState } from './transactions/transaction.state';

export interface AppState {
  customers: CustomerState;
  transactions: TransactionState;
}
