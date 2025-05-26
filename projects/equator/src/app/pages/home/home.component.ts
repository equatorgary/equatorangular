import { Component } from '@angular/core';
import { LayoutComponent, ReviewsComponent, CategoriesComponent, ProductListComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, ReviewsComponent, CategoriesComponent,ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bestSellingProducts = [
    {
      title: 'Equator 13lbs White Compact Washer 2.6 Cu.ft White Compact..',
      price: 2400,
      originalPrice: 3000,
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/Stacked-White.jpg',
      rating: 5,
      discountLabel: '20% OFF'
    },
    {
      title: 'Equator 13lbs White Compact Washer 2.6 Cu.ft White Compact..',
      price: 2400,
      originalPrice: 3000,
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/Stacked-White.jpg',
      rating: 5,
      discountLabel: '20% OFF'
    },
    {
      title: 'Equator 13lbs White Compact Washer 2.6 Cu.ft White Compact..',
      price: 2400,
      originalPrice: 3000,
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/Stacked-White.jpg',
      rating: 5,
      discountLabel: '20% OFF'
    }
  ];
}