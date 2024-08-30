import { Component, Input } from '@angular/core';

@Component({
  selector: 'eq-productbox',
  standalone: true,
  imports: [],
  templateUrl: './productbox.component.html',
  styleUrl: './productbox.component.scss'
})
export class ProductboxComponent {
@Input() name: string = '';
@Input() image: any = '';
@Input() price: string = '0.00';
}
