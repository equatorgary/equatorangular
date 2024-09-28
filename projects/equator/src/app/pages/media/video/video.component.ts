import { Component } from '@angular/core';
import { ArticleboxComponent } from '../../../../../../ui/src/public-api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [NgFor,ArticleboxComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {

}
