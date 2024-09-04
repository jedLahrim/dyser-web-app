import { Component, Input } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterIconComponent } from '../../components/icons/filter-icon/filter-icon.component';
import { DownloadsIconComponent } from '../../components/icons/downloads-icon/downloads-icon.component';
import { LeftArrowIconComponent } from '../../components/icons/left-arrow-icon/left-arrow-icon.component';
import { RightArrowIconComponent } from '../../components/icons/right-arrow-icon/right-arrow-icon.component';
import { NgClass, NgFor, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { MasterCardIconComponent } from '../../components/icons/master-card-icon/master-card-icon.component';
import { PaginationService } from '../../pagination/pagination.service';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgSwitch,
    NgFor,
    NgClass,
    NgStyle,
    SideBarComponent,
    HeaderComponent,
    FilterIconComponent,
    DownloadsIconComponent,
    LeftArrowIconComponent,
    RightArrowIconComponent,
    MasterCardIconComponent,
    CheckboxComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {

  @Input() downloadsIconColor!: string;
  isChecked: boolean = false;
  headers = ['Account name', 'Invoice', 'Payment type', 'Date', 'Amount', 'Status', 'Action'];
  color: string = 'white';

  constructor(public paginationService: PaginationService) {


  }

  ngOnInit() {
    this.paginationService.pageSize = 6;
    // Simulating data fetch
    this.paginationService.data = [
      {
        accountName: 'Azam Khan',
        email: 'azamkhan@gmail.com',
        invoice: 'INV_97686976',
        paymentType: 'Transportation',
        date: 'Jun 02, 2024',
        amount: '$35,765.97',
        status: 'Success',
        action: 'View',
      },
      {
        accountName: 'Sayed Ahmed',
        email: 'sayedahmed@gmail.com',
        invoice: 'INV_42536478',
        paymentType: 'Online payment',
        date: 'Jun 03, 2024',
        amount: '$75,689.08',
        status: 'Pending',
        action: 'View',
      },
      {
        accountName: 'Sayed Ahmed',
        email: 'sayedahmed@gmail.com',
        invoice: 'INV_42536478',
        paymentType: 'Online payment',
        date: 'Jun 03, 2024',
        amount: '$75,689.08',
        status: 'Failed',
        action: 'View',
      },
      {
        accountName: 'Azam Khan 44',
        email: 'azamkhan@gmail.com 44',
        invoice: 'INV_97686976',
        paymentType: 'Transportation 44',
        date: 'Jun 02, 2024',
        amount: '$35,765.97',
        status: 'Success',
        action: 'View',
      },
      {
        accountName: 'Sayed Ahmed 44',
        email: 'sayedahmed@gmail.com 44',
        invoice: 'INV_42536478',
        paymentType: 'Online payment 44',
        date: 'Jun 03, 2024',
        amount: '$75,689.08',
        status: 'Failed',
        action: 'View',
      },
      {
        accountName: 'Sayed Ahmed 44',
        email: 'sayedahmed@gmail.com 44',
        invoice: 'INV_42536478',
        paymentType: 'Online payment 44',
        date: 'Jun 03, 2024',
        amount: '$75,689.08',
        status: 'Failed',
        action: 'View',
      },
      {
        accountName: 'John Doe 22',
        email: 'johndoe@gmail.com 22',
        invoice: 'INV_42536479',
        paymentType: 'Credit Card 22',
        date: 'Jul 10, 2024',
        amount: '$120,450.50',
        status: 'Pending',
        action: 'Pending',
      },
      {
        accountName: 'Jane Smith 33',
        email: 'janesmith@gmail.com 33',
        invoice: 'INV_42536480',
        paymentType: 'Bank Transfer 33',
        date: 'Aug 15, 2024',
        amount: '$95,300.00',
        status: 'Failed',
        action: 'Download',
      },
    ];
    this.paginationService.updatePagination();
  }

}
