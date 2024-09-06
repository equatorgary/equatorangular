import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Heading',
  standalone: true,
  imports: [NgIf],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
@Input() tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
@Input() text: string = '';
@Input() subtext?: string = '';
}
