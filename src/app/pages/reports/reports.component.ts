import { Component } from '@angular/core';
import { SideBarComponent } from '../dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ThreeDotsComponent } from '../../components/icons/linear/three-dots/three-dots.component';
import {
  DownArrowIconComponent,
} from '../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { DownloadsIconComponent } from '../../components/icons/downloads-icon/downloads-icon.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    SideBarComponent,
    HeaderComponent,
    ThreeDotsComponent,
    DownArrowIconComponent,
    DownloadsIconComponent,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {

}
