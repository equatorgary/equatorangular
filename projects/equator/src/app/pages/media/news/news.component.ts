import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleboxComponent } from '../../../../../../ui/src/public-api';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor,ArticleboxComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
