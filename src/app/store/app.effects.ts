import { Type } from '@angular/core';
import { FunctionalEffect } from '@ngrx/effects';
import { CustomerEffects } from './customers/customer.effects';
import { TransactionEffects } from './transactions/transaction.effects';

export const appEffects: Array<Type<unknown> | Record<string, FunctionalEffect>> = [CustomerEffects, TransactionEffects];
