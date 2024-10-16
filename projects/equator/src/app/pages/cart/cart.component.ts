import { Component } from '@angular/core';
import { ContainerComponent, GridColumnComponent, GridComponent } from '../../../../../ui/src/public-api';
import { FeaturedProductsComponent, PageHeaderComponent } from '../../../../../shared/src/public-api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent, GridComponent,GridColumnComponent,NgFor,FeaturedProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
