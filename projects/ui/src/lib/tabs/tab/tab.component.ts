import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Input() heading!: string;
  @Input() active = false;
}
