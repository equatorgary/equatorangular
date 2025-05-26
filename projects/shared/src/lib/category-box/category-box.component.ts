import { NgIf } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'Category-box',
  standalone: true,
  imports: [NgIf],
  templateUrl: './category-box.component.html',
  styleUrl: './category-box.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CategoryBoxComponent {
  @Input() title!: string;
  @Input() count!: string;
  @Input() image!: string;
  
}
