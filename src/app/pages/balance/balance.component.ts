import { Component } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import {
  DownArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { SearchIconComponent } from '../../components/icons/search-icon/search-icon.component';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [
    SideBarComponent,
    HeaderComponent,
    TransactionHistoryComponent,
    DownArrowIconComponent,
    SearchIconComponent,
  ],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css',
})
export class BalanceComponent {
}
