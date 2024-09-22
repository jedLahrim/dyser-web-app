import { Component, Renderer2 } from '@angular/core';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { InvoiceIconComponent } from '../../../components/icons/invoice-icon/invoice-icon.component';
import { MasterCardIconComponent } from '../../../components/icons/master-card-icon/master-card-icon.component';
import { WebMoneyIconComponent } from '../../../components/web-money-icon/web-money-icon.component';
import { PaypalIconComponent } from '../../../components/icons/paypal-icon/paypal-icon.component';
import { VisaIconComponent } from '../../../components/visa-icon/visa-icon.component';
import { FormsModule } from '@angular/forms';
import { SearchIconComponent } from '../../../components/icons/search-icon/search-icon.component';
import {
  DownArrowIconComponent,
} from '../../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { FilterIconComponent } from '../../../components/icons/filter-icon/filter-icon.component';
import { ThreeDotsComponent } from '../../../components/icons/linear/three-dots/three-dots.component';
import { LeftArrowIconComponent } from '../../../components/icons/left-arrow-icon/left-arrow-icon.component';
import { RightArrowIconComponent } from '../../../components/icons/right-arrow-icon/right-arrow-icon.component';
import { PaginationService } from '../../../pagination/pagination.service';
import { CheckboxComponent } from '../../../checkbox/checkbox.component';

@Component({
  selector: 'app-transactions-history',
  standalone: true,
  imports: [FormsModule, NgClass, NgFor, InvoiceIconComponent, NgIf,
    NgOptimizedImage, MasterCardIconComponent,
    WebMoneyIconComponent, PaypalIconComponent, VisaIconComponent, SearchIconComponent, DownArrowIconComponent, FilterIconComponent, ThreeDotsComponent, LeftArrowIconComponent, RightArrowIconComponent, CheckboxComponent],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css',
})
export class TransactionHistoryComponent {
  isChecked: boolean = false;
  selectedOption: string = 'Last 30 days';
  dropdownOpen: boolean = false;
  hoveredOption: string | null = null;
  options = ['Last 10 days', 'Last 20 days', 'Last 30 days'];

  constructor(private renderer: Renderer2, public paginationService: PaginationService) {

  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }

  ngOnInit() {
    this.paginationService.pageSize = 2;
    // Simulating data fetch
    this.paginationService.data = [
      {
        invoice: 'INV_00092323',
        cardType: 'Master Card',
        cardDescription: 'Payment Card',
        method: 'Master Card',
        category: 'Transfer',
        date: 'Jun 02, 2024',
        amount: '-$23.00',
        status: 'Completed',
        selected: true,
      },
      {
        invoice: 'INV_46475869',
        cardType: 'Visa card',
        cardDescription: 'Payment Card',
        method: 'Online Payment',
        category: 'Payment',
        date: 'Jun 03, 2024',
        amount: '+$64.57',
        status: 'On Progress',
        selected: true,
      },
      {
        invoice: 'INV_96565885',
        cardType: 'PayPal',
        cardDescription: 'PayPal',
        method: 'Bank Payment',
        category: 'Payment',
        date: 'Jun 03, 2024',
        amount: '+$97.00',
        status: 'Completed',
        selected: true,
      },
      {
        invoice: 'INV_97860474',
        cardType: 'Master Card',
        cardDescription: 'Bank Payment',
        method: 'Visa Card',
        category: 'Transfer',
        date: 'Jun 04, 2024',
        amount: '-$19.00',
        status: 'On Progress',
        selected: true,
      },
    ];
    this.paginationService.updatePagination();
  }
}
