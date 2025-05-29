import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductListboxComponent } from '../../product-listbox/product-listbox.component';
interface Product {
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  discountLabel: string;
}

@Component({
  selector: 'section-productlist',
  standalone: true,
  imports: [CommonModule, ProductListboxComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() title!: string;
  @Input() products: Product[] = [];
  @Input() seeAllLink?: string;
}
