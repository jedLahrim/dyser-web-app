import { customerReducer } from './customers/customer.reducer';
import { transactionReducer } from './transactions/transaction.reducer';

export const appStore = {
  customer: { name: 'customers', reducer: customerReducer },
  transaction: { name: 'transactions', reducer: transactionReducer },
};
