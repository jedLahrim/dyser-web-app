import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Constant } from '../../common/constant/constant';
import { AuthService } from '../../apis/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateAuthService {
  isLoading: boolean = false;
  signInForm: FormGroup;
  signUpForm: FormGroup;
  emailError!: string;
  passwordError!: string;
  termsAndPrivacyAgreementError!: string;
  fullNameError!: string;
  formInvalid = false;
  emailPlaceholder = 'Enter your email';
  fullNamePlaceholder = 'Enter your Full Name';
  passwordPlaceholder = 'Enter your password';
  emailBorder = '1px solid #EAEDF2';
  passwordBorder = '1px solid #EAEDF2';
  fullNameBorder = '1px solid #EAEDF2';
  passwordInputType = 'password';
  isPasswordShowed: boolean = false;
  _isLoginForm!: boolean;
  termsAgreed: boolean = false;

  constructor(private fb: FormBuilder, public router: Router, public authService: AuthService) {
    this.signInForm = Constant.SIGNING_FORM(this.fb);
    this.signUpForm = Constant.SIGNUP_FORM(this.fb);
  }

  get authForm() {
    return this._isLoginForm ? this.signInForm : this.signUpForm;
  }

  get emailErrors() {
    const emailControl = this.authForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Email is required.';
    } else if (emailControl?.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    return null;
  }

  get fullNameErrors() {
    const fullNameControl = this.authForm.get('fullName');
    if (fullNameControl?.hasError('required')) {
      return 'Full Name is required.';
    } else if (fullNameControl?.hasError('fullName')) {
      return 'Please enter a valid Full Name.';
    } else if (fullNameControl?.hasError('minlength')) {
      return `Full Name must be at least ${fullNameControl?.errors?.['minlength'].requiredLength} characters long.`;
    } else if (fullNameControl?.hasError('maxlength')) {
      return `Full Name must not exceed ${fullNameControl?.errors?.['maxlength'].requiredLength} characters long.`;
    }
    return null;
  }

  get passwordErrors() {
    const passwordControl = this.authForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Password is required.';
    } else if (passwordControl?.hasError('minlength')) {
      return `Password must be at least ${(passwordControl?.errors?.['minlength']).requiredLength} characters long.`;
    } else if (passwordControl?.hasError('pattern')) {
      return 'Password does not meet the required criteria.';
    }
    return null;
  }

  onFocus(field: string): void {
    if (field === 'email') {
      this.emailBorder = '1px solid #6438F5';
      this.emailPlaceholder = 'Typing...';
    } else if (field === 'password') {
      this.passwordBorder = '1px solid #6438F5';
      this.passwordPlaceholder = 'Typing...';
    } else if (field === 'fullName') {
      this.fullNameBorder = '1px solid #6438F5';
      this.fullNamePlaceholder = 'Typing...';
    }
  }

  onBlur(field: string): void {
    if (field === 'email') {
      this.emailBorder = '1px solid #EAEDF2';
      this.emailPlaceholder = 'Enter your email';
    } else if (field === 'password') {
      this.passwordBorder = '1px solid #EAEDF2';
      this.passwordPlaceholder = 'Enter your password';
    } else if (field === 'fullName') {
      this.fullNameBorder = '1px solid #EAEDF2';
      this.fullNamePlaceholder = 'Enter your Full Name';
    }
  }

  showPassword(): void {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
    this.isPasswordShowed = !this.isPasswordShowed; // Toggle the line visibility
  }

  async onSubmittedAll(): Promise<void> {
    this.isLoading = true;
    if (this._isLoginForm) {
      this._handleLogin();

    } else {
      this._handleRegister();
    }
  }

  _resetErrors() {
    this.emailError = '';
    this.passwordError = '';
    this.fullNameError = '';
    this.termsAndPrivacyAgreementError = '';
  }

  private validateCredentials(isLoginForm: boolean) {
    this.formInvalid = true;

    if (isLoginForm) {
      this.validateEmailPassword();
    } else {
      this.validateTerms();
      this.validateEmailPassword();
      if (this.fullNameErrors) {
        this.fullNameError = this.fullNameErrors;
      } else {
        this.fullNameError = '';
      }
    }
  }

  private async successAuth() {
    this.formInvalid = false;
    this._resetErrors();
    await this.router.navigate(['/dashboard']);
  }

  private validateEmailPassword() {
    if (this.emailErrors) {
      this.emailError = this.emailErrors;
    } else {
      this.emailError = '';
    }
    if (this.passwordErrors) {
      this.passwordError = this.passwordErrors;
    } else {
      this.passwordError = '';
    }
  }

  private _handleLogin() {
    if (this.authForm.valid) {

      //   todo call login api
      setTimeout(async () => {
        await this.successAuth();
        this.isLoading = false;
      }, 1000);
    } else {
      this.isLoading = false;
      this.validateCredentials(true);
    }
  }

  private _handleRegister() {
    if (this.authForm.valid && this.termsAgreed) {
      setTimeout(async () => {
        await this.successAuth();
        this.isLoading = false;
      }, 1000);
    } else {
      this.isLoading = false;
      this.validateCredentials(false);
    }
  }

  private validateTerms() {
    if (!this.termsAgreed) {
      this.termsAndPrivacyAgreementError = 'Please agree to the Terms & Privacy to proceed';
    } else {
      this.termsAndPrivacyAgreementError = '';
    }
  }
}
