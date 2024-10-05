import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'eq-productbox',
  standalone: true,
  imports: [NgIf,NgFor,NgClass,RouterLink],
  templateUrl: './productbox.component.html',
  styleUrl: './productbox.component.scss'
})
export class ProductboxComponent {
@Input() name: string = '';
@Input() image: any = '';
@Input() price: string = '0.00';
@Input() rating?: number = 0;
stars = [1, 2, 3, 4, 5];
@Input() link: any;
}
