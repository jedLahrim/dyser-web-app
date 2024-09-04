import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppIconComponent } from '../../components/icons/app-icon/app-icon.component';
import { NgIf, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgStyle,
    WelcomeComponent,
    AppIconComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  signInForm: FormGroup;
  emailError: string | null = null;
  passwordError: string | null = null;
  formInvalid = false;
  emailPlaceholder = 'Enter your email';
  passwordPlaceholder = 'Enter your password';
  emailBorder = '1px solid #EAEDF2';
  passwordBorder = '1px solid #EAEDF2';
  passwordInputType = 'password';
  isPasswordShowed: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$'), // Minimum 6 characters, at least one letter and one number
        ],
      ],
    });
  }

  get emailErrors(): string | null {
    const emailControl = this.signInForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'Email is required.';
    } else if (emailControl?.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    return null;
  }

  get passwordErrors(): string | null {
    const passwordControl = this.signInForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Password is required.';
    } else if (passwordControl?.hasError('minlength')) {
      return `Password must be at least ${passwordControl?.errors?.['minlength'].requiredLength} characters long.`;
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
    }
  }

  onBlur(field: string): void {
    if (field === 'email') {
      this.emailBorder = '1px solid #EAEDF2';
      this.emailPlaceholder = 'Enter your email';
    } else if (field === 'password') {
      this.passwordBorder = '1px solid #EAEDF2';
      this.passwordPlaceholder = 'Enter your password';
    }
  }

  showPassword(): void {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
    this.isPasswordShowed = !this.isPasswordShowed; // Toggle the line visibility
  }

  async onSubmittedAll(): Promise<void> {
    if (this.signInForm.valid) {
      this.formInvalid = false;
      // Form is valid, proceed with sign-in
      console.log('Form is valid. Proceeding with sign-in...');
      await this.router.navigate(['/dashboard']);
      // Add sign-in logic here
    } else {
      this.formInvalid = true;
      if (this.emailErrors) {
        this.emailError = this.emailErrors;
      } else {
        this.emailError = null;
      }
      if (this.passwordErrors) {
        this.passwordError = this.passwordErrors;
      } else {
        this.passwordError = null;
      }
    }
  }
}
