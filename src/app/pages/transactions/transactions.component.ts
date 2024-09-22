import { Component, inject, Input, OnInit } from '@angular/core';
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
import { ActionsComponent } from '../../components/actions/actions.component';
import { Store } from '@ngrx/store';
import { selectTransactions } from '../../store/transactions/transaction.selector';
import { Transaction } from '../../apis/transactions/models/transaction.model';
import { Observable } from 'rxjs';
import { deleteTransaction } from '../../store/transactions/transaction.actions';

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
    ActionsComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {

  @Input() downloadsIconColor!: string;
  isChecked: boolean = false;
  headers = ['Account name', 'Invoice', 'Payment type', 'Date', 'Amount', 'Status', 'Action'];
  color: string = 'white';
  transactions$!: Observable<Transaction[]>;
  store = inject(Store);

  constructor(public paginationService: PaginationService) {
  }

  ngOnInit() {
    // this.store.dispatch(loadTransactions());
    // Simulating data fetch
    this.paginationService.pageSize = 6;
    this.transactions$ = this.store.select(selectTransactions);
    this.transactions$.subscribe(transactions => {
      this.paginationService.data = transactions?.map(transaction => {
        return { ...transaction };
      });
      this.paginationService.updatePagination();
    });
  }

  delete(transaction: Transaction) {
    this.store.dispatch(deleteTransaction({ transactionId: transaction.id }));
  }
}
