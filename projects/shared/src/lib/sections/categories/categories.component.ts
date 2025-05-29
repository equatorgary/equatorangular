import { Component } from '@angular/core';
import { CategoryBoxComponent } from '../../category-box/category-box.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'section-categories',
  standalone: true,
  imports: [CategoryBoxComponent,NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories = [
    {
      title: 'Laundry',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2021/06/EZ-4400N-White-Angle.png'
    },
    {
      title: 'Cooktops',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/IC-350-1.jpg'
    },
    {
      title: 'Freezers',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2021/06/Wine-Freezer.jpg'
    },
    {
      title: 'Dishwasher',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/EDW-6548-W.jpg'
    },
    {
      title: 'Wine Refrigerator',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2021/06/Wine-Refrigerator-1.jpg'
    },
    {
      title: 'Floor Care',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/VC-2000.jpg'
    },
    {
      title: 'Air Conditioner',
      count: '20+ Products',
      image: 'https://equatorappliances.in/wp-content/uploads/2022/03/AC-2000-1.jpg'
    }
  ];
}
