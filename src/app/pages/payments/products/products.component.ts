import { Component } from '@angular/core';
import {
  DownArrowIconComponent,
} from '../../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    DownArrowIconComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

}
