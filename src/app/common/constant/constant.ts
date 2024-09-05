import { FormBuilder, Validators } from '@angular/forms';

export class Constant {

  static fb: FormBuilder;

  constructor() {
  }

  static SIGNUP_FORM = (fb: FormBuilder) => fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&]?)[A-Za-z\\d@$!%*?&]{6,}$'), // Minimum 6 characters, at least one letter and one number
      ],
    ],
  });
  static SIGNING_FORM = (fb: FormBuilder) => fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&]?)[A-Za-z\\d@$!%*?&]{6,}$'), // Minimum 6 characters, at least one letter and one number
      ],
    ],
  });
}
