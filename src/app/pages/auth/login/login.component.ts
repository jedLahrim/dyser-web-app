import { Component, Input, ViewChild } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppIconComponent } from '../../../components/icons/app-icon/app-icon.component';
import { NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateAuthService } from '../../../validations/auth/validate-auth.service';
import { LoaderComponent } from '../loader/loader.component';
import { CheckboxComponent } from '../../../checkbox/checkbox.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgStyle,
    WelcomeComponent,
    AppIconComponent,
    RouterLink,
    LoaderComponent,
    CheckboxComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Input({ required: true }) isLoginForm: boolean = true;
  @Input({ required: true }) headerTitle: string = 'Sign In';
  @Input({ required: true }) headerDescription: string = 'Welcom back! Please enter your details';
  @ViewChild('checkboxRef') checkboxRef!: CheckboxComponent;
  isChecked: boolean = false;

  constructor(public validateAuthService: ValidateAuthService) {
  }

  ngOnInit() {
    this.validateAuthService._isLoginForm = this.isLoginForm;
  }

  navigateToAccount() {
    this.validateAuthService._resetErrors();
    this.isLoginForm ? this.validateAuthService.router.navigate(['/signup']) : this.validateAuthService.router.navigate(['/signin']);
  }

  agreeToTerms() {
    this.isChecked = !this.isChecked;
    this.checkboxRef.isChecked = this.isChecked;
  }

}
