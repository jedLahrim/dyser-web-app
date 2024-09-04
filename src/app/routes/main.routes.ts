import { Routes } from '@angular/router';
import { OverviewComponent } from '../pages/overview/overview.component';
import { BalanceComponent } from '../pages/balance/balance.component';
import { TransactionsComponent } from '../pages/transactions/transactions.component';
import { CustomersComponent } from '../pages/customers/customers.component';
import { ProductCatalogComponent } from '../pages/product-catalog/product-catalog.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { PaymentsComponent } from '../pages/payments/payments.component';
import { InvoicesComponent } from '../pages/invoices/invoices.component';

export const mainRoutes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },

  {
    path: 'balance',
    component: BalanceComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: 'product-catalog',
    component: ProductCatalogComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'invoice',
    component: InvoicesComponent,
  },
];
