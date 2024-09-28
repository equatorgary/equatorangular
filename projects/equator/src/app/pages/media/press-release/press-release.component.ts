import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleboxComponent } from '../../../../../../ui/src/public-api';

@Component({
  selector: 'app-press-release',
  standalone: true,
  imports: [NgFor,ArticleboxComponent],
  templateUrl: './press-release.component.html',
  styleUrl: './press-release.component.scss'
})
export class PressReleaseComponent {

}
