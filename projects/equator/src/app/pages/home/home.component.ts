import { Component } from '@angular/core';
import { SliderComponent } from "../../../../../shared/src/lib/slider/slider.component";
import { HomeBelieveComponent } from "../../../../../shared/src/lib/home-believe/home-believe.component";
import { BestSellingComponent } from "../../../../../shared/src/lib/best-selling/best-selling.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, HomeBelieveComponent, BestSellingComponent],
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
