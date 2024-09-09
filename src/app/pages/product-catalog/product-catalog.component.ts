import { Component, ViewEncapsulation } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftArrowIconComponent } from '../../components/icons/left-arrow-icon/left-arrow-icon.component';
import { NgClass, NgFor, NgForOf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { RightArrowIconComponent } from '../../components/icons/right-arrow-icon/right-arrow-icon.component';
import {
  DownArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { DownloadsIconComponent } from '../../components/icons/downloads-icon/downloads-icon.component';
import { PaginationService } from '../../pagination/pagination.service';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { ThreeDotsComponent } from '../../components/icons/linear/three-dots/three-dots.component';
import { CustomersIconComponent } from '../../components/icons/linear/customers-icon/customers-icon.component';

@Component({
  selector: 'app-product-catalog',
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
    DownArrowIconComponent,
    DownloadsIconComponent,
    CheckboxComponent,
    ThreeDotsComponent,
    CustomersIconComponent,
  ],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCatalogComponent {
  isChecked: boolean = false;
  headers = [
    'Customer name',
    'Product name',
    'Pricing',
    'Created date',
    'Updated date',
    'Order ID',
    'Status',
    'Action',
  ];
  selectedTab: string = 'All Product';
  tabs = [
    { label: 'All Product', value: 'all-product' },
    { label: 'Tax Rates', value: 'tax-rates' },
    { label: 'Pricing', value: 'pricing' },
  ];

  constructor(public paginationService: PaginationService) {
  }

  onCheckboxChange(event: any) {
    this.isChecked = event.target.checked;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  ngOnInit() {
    this.paginationService.pageSize = 6;
    // Simulating data fetch
    this.paginationService.data = [
      {
        customerName: 'Herry Kane',
        productName: 'Adidas shirt',
        pricing: '$537USD',
        createdDate: 'Jun 02, 2024',
        updatedDate: 'Jun 14, 2024',
        orderId: '#75845797',
        status: 'Low of stock',
        action: 'View',
      },
      {
        customerName: 'Herry Books',
        productName: 'Pass bag',
        pricing: '$970USD',
        createdDate: 'Jun 03, 2024',
        updatedDate: 'Jun 15, 2024',
        orderId: '#64758749',
        status: 'Available',
        action: 'View',
      },
      {
        customerName: 'Matt Henry',
        productName: 'Nike air shoes',
        pricing: '$768USD',
        createdDate: 'Jun 04, 2024',
        updatedDate: 'Jun 16, 2024',
        orderId: '#96785749',
        status: 'Out of stock',
        action: 'View',
      },
      {
        customerName: 'Tahera Khan',
        productName: 'Men t-shirt',
        pricing: '$324USD',
        createdDate: 'Jun 05, 2024',
        updatedDate: 'Jun 17, 2024',
        orderId: '#76254364',
        status: 'Low of stock',
        action: 'View',
      },
      {
        customerName: 'David Wish',
        productName: 'Adidas shirt',
        pricing: '$546USD',
        createdDate: 'Jun 06, 2024',
        updatedDate: 'Jun 18, 2024',
        orderId: '#52324356',
        status: 'Available',
        action: 'View',
      },
      {
        customerName: 'Tim David',
        productName: 'Men t-shirt',
        pricing: '$392USD',
        createdDate: 'Jun 07, 2024',
        updatedDate: 'Jun 18, 2024',
        orderId: '#09578465',
        status: 'Out of stock',
        action: 'View',
      },
      {
        customerName: 'David Malan',
        productName: 'Nike air shoes',
        pricing: '$098USD',
        createdDate: 'Jun 08, 2024',
        updatedDate: 'Jun 19, 2024',
        orderId: '#52436724',
        status: 'Out of stock',
        action: 'View',
      },
      {
        customerName: 'Janson Roy',
        productName: 'Adidas shirt',
        pricing: '$134USD',
        createdDate: 'Jun 09, 2024',
        updatedDate: 'Jun 20, 2024',
        orderId: '#21324354',
        status: 'Low of stock',
        action: 'View',
      },

      // Add more rows as needed
    ];
    this.paginationService.updatePagination();
  }
}
