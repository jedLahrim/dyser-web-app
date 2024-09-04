import { Component } from '@angular/core';
import { RevenueComponent } from './revenue/revenue.component';
import { NetRevenueComponent } from './net-revenue/net-revenue.component';
import { CustomerChurnRateComponent } from './customer-churn-rate/customer-churn-rate.component';
import { ReportSummaryComponent } from './report-summary/report-summary.component';
import { RecentSubscriptionsComponent } from './recent-subscriptions/recent-subscriptions.component';
import {
  DownArrowIconComponent,
} from '../../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    DownArrowIconComponent,
    RevenueComponent,
    NetRevenueComponent,
    CustomerChurnRateComponent,
    ReportSummaryComponent,
    RecentSubscriptionsComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {

}
