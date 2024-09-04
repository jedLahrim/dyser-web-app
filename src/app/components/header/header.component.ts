import { Component } from '@angular/core';
import { AddIconComponent } from '../icons/add-icon/add-icon.component';
import { ThreeDotsComponent } from '../icons/linear/three-dots/three-dots.component';
import { SettingIconComponent } from '../icons/setting-icon/setting-icon.component';
import { NotificationIconComponent } from '../icons/notification-icon/notification-icon.component';
import { HelpIconComponent } from '../icons/help-icon/help-icon.component';
import { ToggleIconComponent } from '../icons/toggle-icon/toggle-icon.component';
import { SearchIconComponent } from '../icons/search-icon/search-icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AddIconComponent,
    ThreeDotsComponent,
    SettingIconComponent,
    NotificationIconComponent,
    HelpIconComponent,
    ToggleIconComponent,
    SearchIconComponent,
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isTestModeEnabled = false;

  toggleTestMode() {
    this.isTestModeEnabled = !this.isTestModeEnabled;
  }

  getToggleIconSvg(): string {
    if (this.isTestModeEnabled) {
      return `
        <svg fill="none" height="20" viewBox="0 0 34 20" width="34" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#6438F5" height="20" rx="10" width="34"/>
          <rect fill="white" height="16" rx="8" width="16" x="16" y="2"/>
          <path d="M20.5 10L23 12.5L28 7.5" stroke="#6438F5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </svg>
      `;
    } else {
      return `
        <svg fill="none" height="20" viewBox="0 0 34 20" width="34" xmlns="http://www.w3.org/2000/svg">
          <rect fill="white" height="20" rx="10" width="34"/>
          <rect fill="white" height="16" rx="8" width="16" x="2" y="2"/>
          <path d="M14 10L11.5 7.5L6.5 12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </svg>
      `;
    }
  }
}
