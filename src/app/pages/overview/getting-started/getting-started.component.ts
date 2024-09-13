import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ValidateAuthService } from '../../../validations/auth/validate-auth.service';
import { RightArrowIconComponent } from '../../../components/icons/right-arrow-icon/right-arrow-icon.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [
    NgIf,
    RightArrowIconComponent,
  ],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.css',
})
export class GettingStartedComponent {
  codeString: string = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>    \n' +
    '       <title>Product Purchase</title>     \n' +
    '       <!-- Include pixem.js -- >   \n' +
    '      <script src="https://cdn.pixem.com/pixem/ \n' +
    'pixem.js"></script></head><body>      <!-- \n' +
    'Your product information and checkout button...';
  publicKey: string = 'dj_test_mode_76KJnvdh90qejhjhsasdsd'.substring(0, 16);
  secretKey: string = '3f4d6e7b8a9c0e1f2g3h4j5k6l7m8n9o'.substring(0, 16);

  constructor(public validateAuthService: ValidateAuthService) {
  }

  copyText(): void {
    const textToCopy = this.codeString;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        console.log('Code copied to clipboard successfully!');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      },
    );
  }
}
