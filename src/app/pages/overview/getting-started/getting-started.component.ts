import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.css',
})
export class GettingStartedComponent {
  codeString: string = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>    \n' +
    '       <title>Product Purchase</title>     \n' +
    '       <!-- Include pixem.js -- >   \n' +
    '      <script src="https://cdn.pixem.com/pixem/pixem.js"></script></head><body>     <!-- Your product information and checkout button';
  publicKey: string = 'dj_test_mode_76KJnvdh90qejhjhsasdsd'.substring(0, 16);
}
