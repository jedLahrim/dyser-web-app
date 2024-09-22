import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  static transactionList: Array<Transaction> = [
    {
      accountName: 'Azam Khan',
      email: 'azamkhan@gmail.com',
      invoice: 'INV_97686976',
      paymentType: 'Transportation',
      date: 'Jun 02, 2024',
      amount: '$35,765.97',
      status: 'Success',
      action: 'View',
    },
    {
      accountName: 'Sayed Ahmed',
      email: 'sayedahmed@gmail.com',
      invoice: 'INV_42536478',
      paymentType: 'Online payment',
      date: 'Jun 03, 2024',
      amount: '$75,689.08',
      status: 'Pending',
      action: 'View',
    },
    {
      accountName: 'Sayed Ahmed',
      email: 'sayedahmed@gmail.com',
      invoice: 'INV_42536478',
      paymentType: 'Online payment',
      date: 'Jun 03, 2024',
      amount: '$75,689.08',
      status: 'Failed',
      action: 'View',
    },
    {
      accountName: 'Azam Khan 44',
      email: 'azamkhan@gmail.com 44',
      invoice: 'INV_97686976',
      paymentType: 'Transportation 44',
      date: 'Jun 02, 2024',
      amount: '$35,765.97',
      status: 'Success',
      action: 'View',
    },
    {
      accountName: 'Sayed Ahmed 44',
      email: 'sayedahmed@gmail.com 44',
      invoice: 'INV_42536478',
      paymentType: 'Online payment 44',
      date: 'Jun 03, 2024',
      amount: '$75,689.08',
      status: 'Failed',
      action: 'View',
    },
    {
      accountName: 'Sayed Ahmed 44',
      email: 'sayedahmed@gmail.com 44',
      invoice: 'INV_42536478',
      paymentType: 'Online payment 44',
      date: 'Jun 03, 2024',
      amount: '$75,689.08',
      status: 'Failed',
      action: 'View',
    },
    {
      accountName: 'John Doe 22',
      email: 'johndoe@gmail.com 22',
      invoice: 'INV_42536479',
      paymentType: 'Credit Card 22',
      date: 'Jul 10, 2024',
      amount: '$120,450.50',
      status: 'Pending',
      action: 'Pending',
    },
    {
      accountName: 'Jane Smith 33',
      email: 'janesmith@gmail.com 33',
      invoice: 'INV_42536480',
      paymentType: 'Bank Transfer 33',
      date: 'Aug 15, 2024',
      amount: '$95,300.00',
      status: 'Failed',
      action: 'Download',
    },
  ].map(transaction => {
    return { ...transaction, id: crypto.randomUUID() };
  });

  constructor() {
  }

  getTransactions(): Observable<Array<Transaction>> {
    return of(TransactionService.transactionList);
  }
}
