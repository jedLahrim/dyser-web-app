import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css',
})
export class ActionsComponent {
  @Input({ required: true }) row!: any;
  @Input({ required: true }) delete!: (model: any) => void;
  store = inject(Store);

  // delete(model: any) {
  //   this.store.dispatch(deleteCustomer({ customerId: model.id }));
  // }
}
