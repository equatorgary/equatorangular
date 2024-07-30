import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent, HomeAwardsComponent, HomeBelieveComponent, SliderComponent } from 'projects/shared/src/public-api';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [CommonModule,SliderComponent,HomeBelieveComponent,HomeAwardsComponent,CustomersComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sliderItems = [
    { image: 'https://equatorappliances.com/assets/img/slider/1c.jpg', link: 'https://example.com' },
    { image: 'https://equatorappliances.com/assets/img/slider/2c.jpg', link: 'https://example.com' },
    { image: 'https://equatorappliances.com/assets/img/slider/3c.jpg', link: 'https://example.com' }
  ];
}
