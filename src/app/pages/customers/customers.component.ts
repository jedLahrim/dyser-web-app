import { Component } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftArrowIconComponent } from '../../components/icons/left-arrow-icon/left-arrow-icon.component';
import { NgClass, NgFor, NgForOf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { RightArrowIconComponent } from '../../components/icons/right-arrow-icon/right-arrow-icon.component';
import { DownloadsIconComponent } from '../../components/icons/downloads-icon/downloads-icon.component';
import { AddIconComponent } from '../../components/icons/add-icon/add-icon.component';
import { PaginationService } from '../../pagination/pagination.service';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgSwitch,
    NgFor,
    NgClass,
    NgStyle,
    SideBarComponent,
    HeaderComponent,
    LeftArrowIconComponent,
    NgForOf,
    NgSwitchCase,
    RightArrowIconComponent,
    DownloadsIconComponent,
    AddIconComponent,
    CheckboxComponent,
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  headers = ['Customer name', 'Customer email', 'Payment method', 'Created date', 'Payment date', 'Status', 'Action'];
  isChecked: boolean = false;

  constructor(public paginationService: PaginationService) {
  }

  ngOnInit() {
    // Simulating data fetch
    this.paginationService.pageSize = 6;
    this.paginationService.data = [
      {
        customerName: 'Tahsan Khan',
        customerEmail: 'tahsankhan@gmail.com',
        paymentMethod: 'Master Card',
        createdDate: 'Jun 02, 2024',
        PaymentDate: 'Jun 14,2024',
        status: 'Active',
        action: 'View',
      },
      {
        customerName: 'Herry Kane',
        customerEmail: 'herrykane@gmail.com',
        paymentMethod: 'Visa Card',
        createdDate: 'Jun 03, 2024',
        PaymentDate: 'Jun 15,2024',
        status: 'Pending',
        action: 'View',
      },
      {
        customerName: 'Herry Books',
        customerEmail: 'herrybooks@gmail.com',
        paymentMethod: 'JCB Card',
        createdDate: 'Jun 04, 2024',
        PaymentDate: 'Jun 16,2024',
        status: 'Cancel',
        action: 'View',
      },
      {
        customerName: 'Alice Johnson',
        customerEmail: 'alicejohnson@gmail.com',
        paymentMethod: 'American Express',
        createdDate: 'Jun 05, 2024',
        PaymentDate: 'Jun 17, 2024',
        status: 'Active',
        action: 'View',
      },
      {
        customerName: 'Michael Brown',
        customerEmail: 'michaelbrown@gmail.com',
        paymentMethod: 'Discover Card',
        createdDate: 'Jun 06, 2024',
        PaymentDate: 'Jun 18, 2024',
        status: 'Pending',
        action: 'View',
      },
      {
        customerName: 'Emily Davis',
        customerEmail: 'emilydavis@gmail.com',
        paymentMethod: 'PayPal',
        createdDate: 'Jun 07, 2024',
        PaymentDate: 'Jun 19, 2024',
        status: 'Pending',
        action: 'View',
      },
      {
        customerName: 'Chris Evans',
        customerEmail: 'chrisevans@gmail.com',
        paymentMethod: 'Debit Card',
        createdDate: 'Jun 08, 2024',
        PaymentDate: 'Jun 20, 2024',
        status: 'Cancel',
        action: 'Retry',
      },
      {
        customerName: 'Sophia Turner',
        customerEmail: 'sophiaturner@gmail.com',
        paymentMethod: 'Google Pay',
        createdDate: 'Jun 09, 2024',
        PaymentDate: 'Jun 21, 2024',
        status: 'Active',
        action: 'View',
      },

      // Add more rows as needed
    ];
    this.paginationService.updatePagination();
  }
}
