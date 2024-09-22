import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  static customersList: Array<Customer> = [
    {
      customerName: 'Tahsan Khan',
      customerEmail: 'tahsankhan@gmail.com',
      paymentMethod: 'Master Card',
      createdDate: 'Jun 02, 2024',
      PaymentDate: 'Jun 14,2024',
      status: 'Active',
      action: 'View',
    },
    {
      customerName: 'Herry Kane',
      customerEmail: 'herrykane@gmail.com',
      paymentMethod: 'Visa Card',
      createdDate: 'Jun 03, 2024',
      PaymentDate: 'Jun 15,2024',
      status: 'Pending',
      action: 'View',
    },
    {
      customerName: 'Herry Books',
      customerEmail: 'herrybooks@gmail.com',
      paymentMethod: 'JCB Card',
      createdDate: 'Jun 04, 2024',
      PaymentDate: 'Jun 16,2024',
      status: 'Cancel',
      action: 'View',
    },
    {
      customerName: 'Alice Johnson',
      customerEmail: 'alicejohnson@gmail.com',
      paymentMethod: 'American Express',
      createdDate: 'Jun 05, 2024',
      PaymentDate: 'Jun 17, 2024',
      status: 'Active',
      action: 'View',
    },
    {
      customerName: 'Michael Brown',
      customerEmail: 'michaelbrown@gmail.com',
      paymentMethod: 'Discover Card',
      createdDate: 'Jun 06, 2024',
      PaymentDate: 'Jun 18, 2024',
      status: 'Pending',
      action: 'View',
    },
    {
      customerName: 'Emily Davis',
      customerEmail: 'emilydavis@gmail.com',
      paymentMethod: 'PayPal',
      createdDate: 'Jun 07, 2024',
      PaymentDate: 'Jun 19, 2024',
      status: 'Pending',
      action: 'View',
    },
    {
      customerName: 'Chris Evans',
      customerEmail: 'chrisevans@gmail.com',
      paymentMethod: 'Debit Card',
      createdDate: 'Jun 08, 2024',
      PaymentDate: 'Jun 20, 2024',
      status: 'Cancel',
      action: 'Retry',
    },
    {
      customerName: 'Sophia Turner',
      customerEmail: 'sophiaturner@gmail.com',
      paymentMethod: 'Google Pay',
      createdDate: 'Jun 09, 2024',
      PaymentDate: 'Jun 21, 2024',
      status: 'Active',
      action: 'View',
    },

    // Add more rows as needed
  ].map(customer => {
    return { ...customer, id: crypto.randomUUID() };
  });

  constructor() {
  }

  getCustomers(): Observable<Customer[]> {
    return of(CustomersService.customersList);
  }
}
