import { Component } from '@angular/core';
import { CloseRemoveIconComponent } from '../../components/icons/close-remove-icon/close-remove-icon.component';
import { PaymentsIconComponent } from '../../components/icons/linear/payments-icon/payments-icon.component';
import { MatDialogRef } from '@angular/material/dialog';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import {
  DownArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    CloseRemoveIconComponent,
    PaymentsIconComponent,
    CheckoutsComponent,
    DownArrowIconComponent,
    ProductsComponent,
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css',
})
export class PaymentsComponent {

  constructor(public dialogRef: MatDialogRef<PaymentsComponent>) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
