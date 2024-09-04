import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './edit-icon.component.html',
  styleUrl: './edit-icon.component.css',
})
export class EditIconComponent {
  @Input() size: number = 4;
}
