import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'section-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews = [
    {
      productName: 'Smart Washer 3000',
      content: 'This product exceeded all expectations. Fast shipping, easy to use!',
      authorName: 'John D.',
    }
  ];
}
