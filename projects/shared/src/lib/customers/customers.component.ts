import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eq-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
customers: any = [
  {image: 'https://www.equatorappliances.com/assets/img/clients/8.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/9.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/10.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/11.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/2.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/13.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/3.jpg'},
  {image: 'https://www.equatorappliances.com/assets/img/clients/16.jpg'},
]
}
