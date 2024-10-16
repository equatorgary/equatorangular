import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { GridComponent, GridColumnComponent, ContainerComponent, HeadingComponent } from '../../../../ui/src/public-api';
import { ProductboxComponent } from '../productbox/productbox.component';

@Component({
  selector: 'eq-featured-products',
  standalone: true,
  imports: [ProductboxComponent, NgFor, GridComponent,GridColumnComponent,ContainerComponent,HeadingComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  productlist: any = [
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230410093247.jpg', name: 'Equator 110V Digital Ultra Compact Set Washer 1.57', price: '$1423.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00'}
  ]
}
