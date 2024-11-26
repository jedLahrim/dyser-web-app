import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadTransactions, loadTransactionsFailure, loadTransactionsSuccess } from './transaction.actions';
import { TransactionService } from '../../apis/transactions/service/transaction.service';

@Injectable()
export class TransactionEffects {
  actions$ = inject(Actions);
  transactionService = inject(TransactionService);
  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTransactions),
      exhaustMap((data) =>
        this.transactionService.getTransactions().pipe(
          switchMap((res) => [
            loadTransactionsSuccess({ transactions: res }),
            // notify({
            //   message: 'Contact is Created !',
            //   color: 'alert-success',
            // }),
          ]),
          catchError((error) =>
            of(
              loadTransactionsFailure({ error: error.message }),
              // notify({
              //   message: 'error: ' + error.message,
              //   color: 'alert-error',
              //   position: 'toast-top toast-center',
              //   duration: 10000,
              // })
            ),
          ),
        ),
      ),
    ),
  );

  // constructor(private actions$: Actions, private transactionService: TransactionService) {
  // }
}
