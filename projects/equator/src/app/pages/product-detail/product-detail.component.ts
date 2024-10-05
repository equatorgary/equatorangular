import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent, GridColumnComponent, GridComponent, TabComponent, TabsComponent } from '../../../../../ui/src/public-api';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,TabsComponent,TabComponent, ContainerComponent, NgFor, GridColumnComponent, GridComponent ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  rating?: number = 4;
stars = [1, 2, 3, 4, 5];
  product: any = 
  [
    {
      id: 1,
      name: 'Equator 1.6 cu.ft./15 lbs White 110V Front load Washer 15 programs + Pet Cycle',
      model: '826',
      price: '1,049',
      rating: '4.4',
      reviews: '28',
      categories: ['Washers', 'Laundry Products', 'Pets', 'Laundry'],
      images: ['https://ecotechz.com/multisite/admin/../admin/uploads/20230420075300.jpg','https://ecotechz.com/multisite/admin/../admin/uploads/20230420075300.jpg'],
      description: 'Designed with some of the most premium features available, the Equator 1.62 cu.ft./15 lbs. White Super Washer Built-in/Freestanding 4 Memory Programs delivers an outstanding cleaning experience. Offering 16 total programs, and 12 wash programs (including Normal, Prewash, Allergen Cycle, and Pet Cycle), achieve the precise level of clean you desire with every run. The 826 model measures 33.5 x 23.5 x 21.85 (HxWxD in inches), and has a total capacity of 1.62 cu.ft. (15 lbs). There are two primary energy saving functions on this washer — the Delay Start and Automatic Water Level programs. One-of-a-kind wash cycle programs include Allergen Cycle (which eliminates dust mites, dander, and pollen), as well as Pet Cycle (which removes pesky pet hair from fabrics). Other noteworthy features found on the Equator 1.62 cu.ft./15 lbs. White Super Washer Built-in/Freestanding include a child lock, foam control, touch buttons, a color coded LED display, diagnostic sensors, and an anti-bacterial drum baffle.',
      features: ['12 Wash Cycle Programs','Color Coded LED Display','Pet Cycle','Allergen Cycle','4 Memory Programs','Child Lock','','',''],
      specification: 
      [
        {name: 'Model', value: '826'},
        {name: 'Colors', value: 'White, Silver and Black'},
        {name: 'Capacity', value: '1.62 cu.ft. / 15 lbs'},
        {name: 'Electricals', value: '110V / 60Hz / 15A'},
        {name: 'Programs', value: '16'},
        {name: 'Door Diameter / Swing', value: '18'},
        {name: 'Pre-Wash Function', value: 'Yes'},
        {name: 'Automatic Door Lock in Wash', value: 'Yes'},
        {name: 'Water Intake in Drum', value: 'Circumference and Back'},
        {name: 'Stainless Steel Drum', value: 'Yes, Pearl Design'},
        {name: 'Spin Speed', value: '1400 rpm'},
        {name: 'Weight (Net/Gross)', value: '152 / 167'},
        {name: 'Product Dimensions HxWxD (inch)', value: '33.5 x 23.5 x 21.85'},
        {name: 'Packaging Dimensions HxWxD (inch)', value: '35 x 25.5 x 22.6'},
        {name: 'Certification', value: 'ETL'},
        {name: 'Warranty', value: '1 Years Parts & Labor'},
      ]
    }
  ];
  specification: any = [
      {name: 'Model', value: '826'},
      {name: 'Colors', value: 'White, Silver and Black'},
      {name: 'Capacity', value: '1.62 cu.ft. / 15 lbs'},
      {name: 'Electricals', value: '110V / 60Hz / 15A'},
      {name: 'Programs', value: '16'},
      {name: 'Door Diameter / Swing', value: '18'},
      {name: 'Pre-Wash Function', value: 'Yes'},
      {name: 'Automatic Door Lock in Wash', value: 'Yes'},
      {name: 'Water Intake in Drum', value: 'Circumference and Back'},
      {name: 'Stainless Steel Drum', value: 'Yes, Pearl Design'},
      {name: 'Spin Speed', value: '1400 rpm'},
      {name: 'Weight (Net/Gross)', value: '152 / 167'},
      {name: 'Product Dimensions HxWxD (inch)', value: '33.5 x 23.5 x 21.85'},
      {name: 'Packaging Dimensions HxWxD (inch)', value: '35 x 25.5 x 22.6'},
      {name: 'Certification', value: 'ETL'},
      {name: 'Warranty', value: '1 Years Parts & Labor'},
  ];
  documents: any = [
      {name: 'Spec Sheet', link: 'https://drive.google.com/file/d/1DLlq3h00yZ9o5y2TQNBiGIrgSyFGEbhD/view?usp=share_link'},
      {name: 'Manuals', link: 'https://drive.google.com/file/d/1g9iUiREZZb9HzvoIzs7gFlw2dA7RoIfi/view?usp=share_link'},
      {name: 'Energy Guide', link: 'https://drive.google.com/drive/folders/1d5isFXt35JK2WW6NP3HoAwCX7nFKPtaB?usp=share_link'},
      {name: 'Factory Docs', link: 'https://drive.google.com/drive/folders/1JNl4QKFgSV6Cksp7LtfbPiQvnH5_4EtM?usp=sharing'}
  ]
}
