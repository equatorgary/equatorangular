import { Component } from '@angular/core';
import { ArticleboxComponent } from '../../../../../../ui/src/public-api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [NgFor,ArticleboxComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {

}
