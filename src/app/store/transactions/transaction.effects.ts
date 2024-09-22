import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadTransactions, loadTransactionsFailure, loadTransactionsSuccess } from './transaction.actions';
import { TransactionService } from '../../apis/transactions/service/transaction.service';

@Injectable()
export class TransactionEffects {
  loadTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTransactions),
      mergeMap(() =>
        this.transactionService.getTransactions().pipe(
          map((transactions) => loadTransactionsSuccess({ transactions })),
          catchError((error) => of(loadTransactionsFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private transactionService: TransactionService) {
  }
}
