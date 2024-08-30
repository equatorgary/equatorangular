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
  {menuname: 'Home', link: ''},
  {menuname: 'About', link: ''},
  {menuname: 'Products', link: ''},
  {menuname: 'Application', link: ''},
  {menuname: 'Reviews', link: ''},
  {menuname: 'Dealer', link: ''},
  {menuname: 'Media', link: ''},
  {menuname: 'Warranty', link: ''},
  {menuname: 'Contact', link: ''},
];
onItemSelected(item: string) {
  console.log('Selected item:', item);
}
handleOptionSelected(option: string): void {
  console.log('Selected option:', option);
}
}
