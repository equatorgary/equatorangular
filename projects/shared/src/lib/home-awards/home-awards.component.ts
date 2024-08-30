import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'eq-home-awards',
  standalone: true,
  imports: [CommonModule,SliderComponent],
  templateUrl: './home-awards.component.html',
  styleUrls: ['./home-awards.component.scss']
})
export class HomeAwardsComponent {
  sliderItems = [
    { image: 'https://www.equatorappliances.com/assets/img/slider/Award-post-06.jpg', link: 'https://example.com' },
    { image: 'https://www.equatorappliances.com/assets/img/slider/Award-post-05.jpg', link: 'https://example.com' },
    { image: 'https://www.equatorappliances.com/assets/img/slider/Award-post-08.jpg', link: 'https://example.com' },
    { image: 'https://www.equatorappliances.com/assets/img/slider/4400-N-PopularMechanicsAwards.jpg', link: 'https://example.com' },
    { image: 'https://www.equatorappliances.com/assets/img/slider/outdoor_refrigerator.jpg', link: 'https://example.com' },
    { image: 'https://www.equatorappliances.com/assets/img/slider/1-01.jpg', link: 'https://example.com' }
  ];
}
