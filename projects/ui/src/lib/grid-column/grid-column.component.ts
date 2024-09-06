import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Grid-col',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './grid-column.component.html',
  styleUrl: './grid-column.component.scss'
})
export class GridColumnComponent {
  @Input() colspan: number = 1;

  get gridColumnSpan(): string {
    return `span ${this.colspan}`;
  }
}
