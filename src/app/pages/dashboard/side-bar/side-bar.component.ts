import { Component, Input } from '@angular/core';
import { HoverSideBarComponent } from './hover-side-bar/hover-side-bar.component';
import { Router, RouterLink } from '@angular/router';
import { AffiliatesIconComponent } from '../../../components/icons/linear/affiliates-icon/affiliates-icon.component';
import { AppIconComponent } from '../../../components/icons/app-icon/app-icon.component';
import { BalanceIconComponent } from '../../../components/icons/linear/balance-icon/balance-icon.component';
import { CustomersIconComponent } from '../../../components/icons/linear/customers-icon/customers-icon.component';
import { DesignIconComponent } from '../../../components/icons/linear/design-icon/design-icon.component';
import { DevelopersIconComponent } from '../../../components/icons/linear/developers-icon/developers-icon.component';
import {
  DownArrowIconComponent,
} from '../../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { InvoiceIconComponent } from '../../../components/icons/linear/invoice-icon/invoice-icon.component';
import { OverviewIconComponent } from '../../../components/icons/linear/overview-icon/overview-icon.component';
import { PaymentsIconComponent } from '../../../components/icons/linear/payments-icon/payments-icon.component';
import {
  ProductCatalogIconComponent,
} from '../../../components/icons/linear/product-catalog-icon/product-catalog-icon.component';
import { ReportsIconComponent } from '../../../components/icons/linear/reports-icon/reports-icon.component';
import {
  RightArrowIconComponent,
} from '../../../components/icons/linear/arrow-icon/right-arrow-icon/right-arrow-icon.component';
import { SetupIconComponent } from '../../../components/icons/linear/setup-icon/setup-icon.component';
import { TransactionIconComponent } from '../../../components/icons/linear/transaction-icon/transaction-icon.component';
import { ThreeDotsComponent } from '../../../components/icons/linear/three-dots/three-dots.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    NgStyle,
    AffiliatesIconComponent,
    AppIconComponent,
    BalanceIconComponent,
    CustomersIconComponent,
    DesignIconComponent,
    DevelopersIconComponent,
    DownArrowIconComponent,
    HoverSideBarComponent,
    InvoiceIconComponent,
    OverviewIconComponent,
    PaymentsIconComponent,
    ProductCatalogIconComponent,
    ReportsIconComponent,
    RightArrowIconComponent,
    RouterLink,
    SetupIconComponent,
    TransactionIconComponent,
    ThreeDotsComponent,
    HeaderComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {

  @Input() dynamicHeight: number = 940;
  sidebarParams: string[] = [];

  constructor(private router: Router) {
  }

  get sidebarMainParams() {
    return this.getSidebarMainParams();
  }

  getSidebarMainParams() {
    this.sidebarParams = [];
    this.sidebarParams.push('Overview',
      'Balance',
      'Transactions',
      'Customers',
      'Product Catalog',
      'Reports',
      'Payments',
      'Invoice');
    return this.sidebarParams;
  }

  // ngOnInit() {
  //   this.dynamicHeight = 1000
  // }

  getSidebarOthersParams() {
    this.sidebarParams = [];
    this.sidebarParams.push('Developers',
      'Affiliate',
      'Setup',
      'Design');
    return this.sidebarParams;
  }
}
