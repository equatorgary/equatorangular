import { Component } from '@angular/core';
import { ContainerComponent, GridColumnComponent, GridComponent, HeadingComponent } from '../../../../ui/src/public-api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'eq-feature-videos',
  standalone: true,
  imports: [ContainerComponent,HeadingComponent, GridComponent, GridColumnComponent,NgFor],
  templateUrl: './feature-videos.component.html',
  styleUrl: './feature-videos.component.scss'
})
export class FeatureVideosComponent {
  
  heading: string = 'Featured Videos';
  videos: any = [
    {thumb: 'https://img.youtube.com/vi/skGuU9sFjh4/maxresdefault.jpg', title: '5 in 1 - Air Fryer'},
    {thumb: 'https://img.youtube.com/vi/mY_DvvOKZ7o/maxresdefault.jpg', title: 'Sleek Dishwasher 84 series'},
    {thumb: 'https://img.youtube.com/vi/yWSjYvj6skg/maxresdefault.jpg', title: 'Vacuum Sweep mop'}
  ]
}
