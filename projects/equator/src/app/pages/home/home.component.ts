import { Component } from '@angular/core';
import { OurCustomersComponent, BestSellingComponent, HomeBelieveComponent, SliderComponent, FeatureVideosComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, HomeBelieveComponent, BestSellingComponent, OurCustomersComponent,FeatureVideosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sliderItems = [
    { image: 'https://equatorappliances.com/assets/img/slider/1c.jpg', link: 'https://example.com' },
    { image: 'https://equatorappliances.com/assets/img/slider/2c.jpg', link: 'https://example.com' },
    { image: 'https://equatorappliances.com/assets/img/slider/3c.jpg', link: 'https://example.com' }
  ];
}
