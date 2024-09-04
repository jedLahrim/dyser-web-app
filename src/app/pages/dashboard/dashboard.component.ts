import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HoverSideBarComponent } from './side-bar/hover-side-bar/hover-side-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { OverviewIconComponent } from '../../components/icons/linear/overview-icon/overview-icon.component';
import { BalanceIconComponent } from '../../components/icons/linear/balance-icon/balance-icon.component';
import { TransactionIconComponent } from '../../components/icons/linear/transaction-icon/transaction-icon.component';
import { CustomersIconComponent } from '../../components/icons/linear/customers-icon/customers-icon.component';
import {
  ProductCatalogIconComponent,
} from '../../components/icons/linear/product-catalog-icon/product-catalog-icon.component';
import { ReportsIconComponent } from '../../components/icons/linear/reports-icon/reports-icon.component';
import { PaymentsIconComponent } from '../../components/icons/linear/payments-icon/payments-icon.component';
import { InvoiceIconComponent } from '../../components/icons/linear/invoice-icon/invoice-icon.component';
import { DevelopersIconComponent } from '../../components/icons/linear/developers-icon/developers-icon.component';
import { AffiliatesIconComponent } from '../../components/icons/linear/affiliates-icon/affiliates-icon.component';
import { SetupIconComponent } from '../../components/icons/linear/setup-icon/setup-icon.component';
import { DesignIconComponent } from '../../components/icons/linear/design-icon/design-icon.component';
import {
  RightArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/right-arrow-icon/right-arrow-icon.component';
import { AppIconComponent } from '../../components/icons/app-icon/app-icon.component';
import {
  DownArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { ThreeDotsComponent } from '../../components/icons/linear/three-dots/three-dots.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterIconComponent } from '../../components/icons/filter-icon/filter-icon.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    OverviewIconComponent,
    BalanceIconComponent,
    TransactionIconComponent,
    CustomersIconComponent,
    ProductCatalogIconComponent,
    ReportsIconComponent,
    PaymentsIconComponent,
    InvoiceIconComponent,
    DevelopersIconComponent,
    AffiliatesIconComponent,
    SetupIconComponent,
    DesignIconComponent,
    RightArrowIconComponent,
    AppIconComponent,
    DownArrowIconComponent,
    ThreeDotsComponent,
    HeaderComponent,
    NgSwitch,
    NgClass,
    NgSwitchCase,
    NgForOf,
    NgIf,
    RouterLink,
    HoverSideBarComponent,
    SideBarComponent,
    ContentComponent,
    FilterIconComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showList = false;

  toggleList() {
    this.showList = !this.showList;
  }
}
