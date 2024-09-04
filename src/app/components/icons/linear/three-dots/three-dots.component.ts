import { Component } from '@angular/core';

@Component({
  selector: 'app-three-dots',
  standalone: true,
  imports: [],
  templateUrl: './three-dots.component.html',
  styleUrl: './three-dots.component.css',
})
export class ThreeDotsComponent {

  protected readonly console = console;
}
