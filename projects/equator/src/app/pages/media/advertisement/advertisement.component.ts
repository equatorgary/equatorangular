import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleboxComponent } from '../../../../../../ui/src/public-api';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [NgFor,ArticleboxComponent],
  templateUrl: './advertisement.component.html',
  styleUrl: './advertisement.component.scss'
})
export class AdvertisementComponent {

}
