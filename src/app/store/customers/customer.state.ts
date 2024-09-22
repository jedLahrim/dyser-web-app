import { Customer } from '../../apis/customers/models/customer.model';
import { CustomersService } from '../../apis/customers/service/customers.service';

export interface CustomerState {
  customers: Customer[];
  isChecked: boolean;
  loading: boolean;
  error: string | null;
}

export const customerState: CustomerState = {
  customers: CustomersService.customersList,
  isChecked: false,
  loading: false,
  error: null,
};
