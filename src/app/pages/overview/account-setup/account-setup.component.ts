import { Component } from '@angular/core';
import { CheckMarkIconComponent } from '../../../components/icons/check-mark-icon/check-mark-icon.component';
import {
  SecurityCheckIconComponent,
} from '../../../components/icons/security-check-icon/security-check-icon.component';
import { ShieldIconComponent } from '../../../components/icons/shield-icon/shield-icon.component';

@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [
    CheckMarkIconComponent,
    SecurityCheckIconComponent,
    ShieldIconComponent,
  ],
  templateUrl: './account-setup.component.html',
  styleUrl: './account-setup.component.css',
})
export class AccountSetupComponent {

}
