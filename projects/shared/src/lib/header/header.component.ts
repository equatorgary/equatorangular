import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../components/dropdown/dropdown.component';


@Component({
  selector: 'eq-header',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() design?: number = 1;
@Input() logo?: any= '';
menu:any= [
  {menuname: 'Home', link: '/'},
  {menuname: 'About', link: '/about'},
  {menuname: 'Products', link: '/category?name=products'},
  {menuname: 'Application', link: ''},
  {menuname: 'Reviews', link: '/reviews'},
  {menuname: 'Dealer', link: '/dealer'},
  {menuname: 'Media', link: ''},
  {menuname: 'Warranty', link: '/warranty'},
  {menuname: 'Contact', link: ''},
];
onItemSelected(item: string) {
  console.log('Selected item:', item);
}
handleOptionSelected(option: string): void {
  console.log('Selected option:', option);
}
}
