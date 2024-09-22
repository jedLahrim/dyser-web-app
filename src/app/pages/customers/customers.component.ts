import { Component, inject, OnInit } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftArrowIconComponent } from '../../components/icons/left-arrow-icon/left-arrow-icon.component';
import { NgClass, NgFor, NgForOf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { RightArrowIconComponent } from '../../components/icons/right-arrow-icon/right-arrow-icon.component';
import { DownloadsIconComponent } from '../../components/icons/downloads-icon/downloads-icon.component';
import { AddIconComponent } from '../../components/icons/add-icon/add-icon.component';
import { PaginationService } from '../../pagination/pagination.service';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { CustomersService } from '../../apis/customers/service/customers.service';
import { Store } from '@ngrx/store';
import { selectCustomers } from '../../store/customers/customer.selector';
import { Observable } from 'rxjs';
import { Customer } from '../../apis/customers/models/customer.model';
import { deleteCustomer } from '../../store/customers/customer.actions';
import { ActionsComponent } from '../../components/actions/actions.component';

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
    ActionsComponent,
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  headers = ['Customer name', 'Customer email', 'Payment method', 'Created date', 'Payment date', 'Status', 'Action'];
  isChecked: boolean = false;
  customers$!: Observable<Customer[]>;
  store = inject(Store);

  constructor(public paginationService: PaginationService,
              private customersService: CustomersService,
  ) {
  }

  ngOnInit() {
    // this.store.dispatch(loadCustomers());
    // Simulating data fetch
    this.paginationService.pageSize = 6;
    this.customers$ = this.store.select(selectCustomers);
    this.customers$.subscribe(customers => {
      this.paginationService.data = customers.map(customer => {
        return { ...customer };
      });
      this.paginationService.updatePagination();
    });
  }

  delete(customer: Customer) {
    this.store.dispatch(deleteCustomer({ customerId: customer.id }));
  }
}
