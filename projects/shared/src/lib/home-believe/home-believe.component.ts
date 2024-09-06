import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent, HeadingComponent } from '../../../../ui/src/public-api';

@Component({
  selector: 'eq-home-believe',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HeadingComponent],
  templateUrl: './home-believe.component.html',
  styleUrls: ['./home-believe.component.scss']
})
export class HomeBelieveComponent {
  @Input() heading?: string = 'Equator Believes In';
values: any;
constructor(){
  this.values = [
    {label: 'Innovation', icon: 'https://www.equatorappliances.com/data-images/innovation.png'},
    {label: 'Hi-Tech Appliances', icon: 'https://www.equatorappliances.com/data-images/hitechapp.png'},
    {label: 'Health & Wellness', icon: 'https://www.equatorappliances.com/data-images/healthwellness.png'},
    {label: 'Clean Energy', icon: 'https://www.equatorappliances.com/data-images/cleanenergy.png'},
    {label: 'User Friendly', icon: 'https://www.equatorappliances.com/data-images/userfriendly.png'},
    {label: 'Eco Efficient', icon: 'https://www.equatorappliances.com/data-images/eco-friendly.png'}
  ]
}
}
