import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppIconComponent } from '../../components/icons/app-icon/app-icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    WelcomeComponent,
    AppIconComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

}
