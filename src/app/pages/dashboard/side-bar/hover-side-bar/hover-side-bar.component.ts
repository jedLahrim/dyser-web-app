import { Component, Input } from '@angular/core';
import {
  RightArrowIconComponent,
} from '../../../../components/icons/linear/arrow-icon/right-arrow-icon/right-arrow-icon.component';
import { OverviewIconComponent } from '../../../../components/icons/linear/overview-icon/overview-icon.component';
import { BalanceIconComponent } from '../../../../components/icons/linear/balance-icon/balance-icon.component';
import {
  TransactionIconComponent,
} from '../../../../components/icons/linear/transaction-icon/transaction-icon.component';
import { CustomersIconComponent } from '../../../../components/icons/linear/customers-icon/customers-icon.component';
import {
  ProductCatalogIconComponent,
} from '../../../../components/icons/linear/product-catalog-icon/product-catalog-icon.component';
import { AffiliatesIconComponent } from '../../../../components/icons/linear/affiliates-icon/affiliates-icon.component';
import { SetupIconComponent } from '../../../../components/icons/linear/setup-icon/setup-icon.component';
import { DesignIconComponent } from '../../../../components/icons/linear/design-icon/design-icon.component';
import { DevelopersIconComponent } from '../../../../components/icons/linear/developers-icon/developers-icon.component';
import { InvoiceIconComponent } from '../../../../components/icons/linear/invoice-icon/invoice-icon.component';
import { ReportsIconComponent } from '../../../../components/icons/linear/reports-icon/reports-icon.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsComponent } from '../../../payments/payments.component';
import { PaymentsIconComponent } from '../../../../components/icons/linear/payments-icon/payments-icon.component';

@Component({
  selector: 'app-hover-side-bar',
  standalone: true,
  imports: [
    RightArrowIconComponent,
    OverviewIconComponent,
    BalanceIconComponent,
    TransactionIconComponent,
    CustomersIconComponent,
    ProductCatalogIconComponent,
    AffiliatesIconComponent,
    SetupIconComponent,
    DesignIconComponent,
    DevelopersIconComponent,
    InvoiceIconComponent,
    ReportsIconComponent,
    PaymentsIconComponent,
  ],
  templateUrl: './hover-side-bar.component.html',
  styleUrl: './hover-side-bar.component.css',
})
export class HoverSideBarComponent {
  @Input() sidebarParams!: string[];

  constructor(private router: Router, private dialog: MatDialog) {


  }

  // @Input() sidebarOthersParams!: string[];
  async goToOverview(sidebarParameter: string) {
    switch (sidebarParameter) {
      case 'Overview':
        await this.router.navigate(['/overview']);
        break;
      case 'Balance':
        await this.router.navigate(['/balance']);

        break;
      case 'Transactions':
        await this.router.navigate(['/transactions']);

        break;
      case 'Customers':
        await this.router.navigate(['/customers']);

        break;
      case 'Product Catalog':
        await this.router.navigate(['/product-catalog']);

        break;
      case 'Reports':
        await this.router.navigate(['/reports']);

        break;
      case 'Payments':
        // await this.router.navigate(['/payments']);
        this.dialog.open(PaymentsComponent, {
          enterAnimationDuration: 400,
          exitAnimationDuration: 200,
          width: '100%',  // Makes the dialog responsive
          height: '100%', // Adjusts height accordingly
          maxWidth: '1420px',
          maxHeight: '720px',
          panelClass: 'custom-dialog-container',
          autoFocus: true,
        });
        break;
      case 'Invoice':
        await this.router.navigate(['/invoice']);

        break;
      case 'Developers':
        await this.router.navigate(['/developers']);

        break;
      case 'Affiliate':
        await this.router.navigate(['/affiliate']);

        break;
      case 'Setup':
        await this.router.navigate(['/setup']);

        break;
      case 'Design':
        await this.router.navigate(['/design']);
        break;

    }
  }
}
