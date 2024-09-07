import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input({ transform: booleanAttribute }) isChecked: boolean = false;
  @Input() marginTop: string = '0px';
  @Output() checkboxChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    this.checkboxChange.emit((event.target as HTMLInputElement).checked);
  }
}
