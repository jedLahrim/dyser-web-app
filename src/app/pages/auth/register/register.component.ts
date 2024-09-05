import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ValidateAuthService } from '../../../validations/auth/validate-auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LoginComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent extends ValidateAuthService {

}
