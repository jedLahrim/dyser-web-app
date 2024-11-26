import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadCustomers, loadCustomersFailure, loadCustomersSuccess } from './customer.actions';
import { CustomersService } from '../../apis/customers/service/customers.service';

@Injectable()
export class CustomerEffects {
  // loadCustomers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadCustomers),
  //     mergeMap(() =>
  //       this.customersService.getCustomers().pipe(
  //         map((customers) => loadCustomersSuccess({ customers })),
  //         catchError((error) => of(loadCustomersFailure({ error }))),
  //       ),
  //     ),
  //   ),
  // );

  constructor(private actions$: Actions, private customersService: CustomersService) {
  }
}
