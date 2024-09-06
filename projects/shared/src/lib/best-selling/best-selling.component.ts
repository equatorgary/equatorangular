import { Component } from '@angular/core';
import { ProductboxComponent } from "../productbox/productbox.component";
import { NgFor } from '@angular/common';
import { ContainerComponent, GridColumnComponent, GridComponent, HeadingComponent } from '../../../../ui/src/public-api';

@Component({
  selector: 'eq-best-selling',
  standalone: true,
  imports: [ProductboxComponent, NgFor, GridComponent,GridColumnComponent,ContainerComponent,HeadingComponent],
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.scss'
})
export class BestSellingComponent {
  productlist: any = [
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230410093247.jpg', name: 'Equator 110V Digital Ultra Compact Set Washer 1.57', price: '$1423.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00'},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329050516.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1339.00'}
  ]
}
