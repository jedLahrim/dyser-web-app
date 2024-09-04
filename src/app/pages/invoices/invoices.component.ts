import { Component } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import {
  DownArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { DownloadsIconComponent } from '../../components/icons/downloads-icon/downloads-icon.component';
import { LeftArrowIconComponent } from '../../components/icons/left-arrow-icon/left-arrow-icon.component';
import { NgClass, NgFor, NgForOf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { RightArrowIconComponent } from '../../components/icons/right-arrow-icon/right-arrow-icon.component';
import { PaginationService } from '../../pagination/pagination.service';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgSwitch,
    NgFor,
    NgClass,
    NgStyle,
    SideBarComponent,
    HeaderComponent,
    DownArrowIconComponent,
    DownloadsIconComponent,
    LeftArrowIconComponent,
    NgForOf,
    NgSwitchCase,
    RightArrowIconComponent,
    CheckboxComponent,
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent {

  isChecked: boolean = false;
  headers = [
    'Customer name',
    'Customer email',
    'Invoice Number',
    'Due date',
    'Created',
    'Amount',
    'Status',
    'Action',
  ];

  constructor(public paginationService: PaginationService) {
  }

  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
  }

  ngOnInit() {
    this.paginationService.pageSize = 6;
    // Simulating data fetch
    this.paginationService.data = [
      {
        customerName: 'Tahsan Khan',
        customerEmail: 'tahsankhan@gmail.com',
        invoiceNumber: '#5466H74W7S',
        dueDate: 'Jun 03, 2024',
        createdDate: 'Jun 14, 2024',
        amount: '$64,575.00',
        status: 'Low of stock',
        action: 'Edit',
      },
      {
        customerName: 'Herry Kane',
        customerEmail: 'herrykane@gmail.com',
        invoiceNumber: '#6475B4T7A76',
        dueDate: 'Jun 04, 2024',
        createdDate: 'Jun 15, 2024',
        amount: '$53,536.09',
        status: 'Available',
        action: 'Edit',
      },
      {
        customerName: 'Matt Henry',
        customerEmail: 'herrybooks@gmail.com',
        invoiceNumber: '#657K768M64P',
        dueDate: 'Jun 05, 2024',
        createdDate: 'Jun 16, 2024',
        amount: '$76,435.01',
        status: 'Out of stock',
        action: 'Edit',
      },
      {
        customerName: 'Tahera Khan',
        customerEmail: 'mattthenry@gmail.com',
        invoiceNumber: '#324S75Q63M8',
        dueDate: 'Jun 06, 2024',
        createdDate: 'Jun 17, 2024',
        amount: '$96,647.00',
        status: 'Low of stock',
        action: 'Edit',
      },
      {
        customerName: 'David Wish',
        customerEmail: 'taherahkane@gmail.com',
        invoiceNumber: '#97M64B47G64',
        dueDate: 'Jun 07, 2024',
        createdDate: 'Jun 18, 2024',
        amount: '$64,098.06',
        status: 'Available',
        action: 'Edit',
      },
      {
        customerName: 'Tim David',
        customerEmail: 'davidwish@gmail.com',
        invoiceNumber: '#869L475F53Z',
        dueDate: 'Jun 08, 2024',
        createdDate: 'Jun 19, 2024',
        amount: '$73,435.01',
        status: 'Out of stock',
        action: 'Edit',
      },
      {
        customerName: 'David Malan',
        customerEmail: 'timdavid@gmail.com',
        invoiceNumber: '#758V758C64S',
        dueDate: 'Jun 09, 2024',
        createdDate: 'Jun 20, 2024',
        amount: '$32,869.95',
        status: 'Out of stock',
        action: 'Edit',
      },
      {
        customerName: 'Janson Roy',
        customerEmail: 'jansonroy@gmail.com',
        invoiceNumber: '#53645HFD647',
        dueDate: 'Jun 10, 2024',
        createdDate: 'Jun 21, 2024',
        amount: '$53,857.00',
        status: 'Low of stock',
        action: 'Edit',
      },
    ];
    this.paginationService.updatePagination();
  }
}
