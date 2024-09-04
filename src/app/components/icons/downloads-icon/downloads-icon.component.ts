import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-downloads-icon',
  standalone: true,
  imports: [],
  templateUrl: './downloads-icon.component.html',
  styleUrl: './downloads-icon.component.css',
})
export class DownloadsIconComponent {
  @Input() downloadsIconColor!: string;

}
