import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Product-listbox',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-listbox.component.html',
  styleUrl: './product-listbox.component.scss'
})
export class ProductListboxComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() originalPrice!: number;
  @Input() image!: string;
  @Input() rating: number = 5; // default
  @Input() discountLabel!: string;
}
