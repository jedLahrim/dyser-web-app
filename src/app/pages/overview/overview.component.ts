import { Component } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { ProductCardsInfosComponent } from './product-cards-infos/product-cards-infos.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    SideBarComponent,
    HeaderComponent,
    AccountSetupComponent,
    ProductCardsInfosComponent,
    GettingStartedComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
}
