import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'eq-articlebox',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './articlebox.component.html',
  styleUrl: './articlebox.component.scss'
})
export class ArticleboxComponent {
@Input() heading:string = 'Heading Goes Here';
@Input() image?:any = '';
@Input() date?:any = 'Today';
@Input() text?:string = '';
@Input() buttonText?:string = 'See Detail';
@Input() buttonLink?:any = '';
@Input() showButton?:false | true = true;
}
