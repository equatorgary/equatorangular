import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../../ui/src/public-api';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AwardsComponent } from './awards/awards.component';
import { VideoComponent } from './video/video.component';
import { NewsComponent } from './news/news.component';
import { PressReleaseComponent } from './press-release/press-release.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent,NgFor,NgIf,AdvertisementComponent,AwardsComponent,VideoComponent,NewsComponent,PressReleaseComponent,NgClass],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  pageTitle = 'Media';
media: any = [
  {id: 1, name: 'Press Release'},
  {id: 2, name: 'Awards'},
  {id: 3, name: 'Video'},
  {id: 4, name: 'News'},
  {id: 5, name: 'Advertisement'}
];
currentNav: any = 1;
nav(id:any,title:string){
  this.currentNav = id;
  this.pageTitle = title
}
}
