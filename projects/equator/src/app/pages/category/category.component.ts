import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContainerComponent, GridColumnComponent, GridComponent } from '../../../../../ui/src/public-api';
import { ProductboxComponent } from '../../../../../shared/src/lib/productbox/productbox.component';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [PageHeaderComponent, NgIf,GridColumnComponent,GridComponent,ProductboxComponent,NgFor,ContainerComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  productlist: any = [
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230410093247.jpg', name: 'Equator 110V Digital Ultra Compact Set Washer 1.57', price: '$1423.00', rating: 0},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00', rating: 1},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00', rating: 2},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329051254.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1379.00', rating: 3},
    {image: 'https://ecotechz.com/multisite/admin/uploads/20230329050516.jpg', name: 'All-In-One CONVERTIBLE Washer-Dryer 18lb/1.9cf SAN', price: '$1339.00', rating: 4}
  ]
  categoryName: string | null = null;
  categoryData: any = null;

  // Define categories based on the name instead of ID
  categories: Record<string, { name: string; description: string }> = {
    'electronics': { name: 'Electronics', description: 'Find the latest gadgets and electronics here.' },
    'clothing': { name: 'Clothing', description: 'Trendy and comfortable clothing for all seasons.' },
    'books': { name: 'Books', description: 'A wide range of books to feed your mind.' },
    'products': { name: 'Our Products', description: 'Equator Advanced Appliances' },

  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the query parameter 'name' from the URL
    this.route.queryParamMap.subscribe(params => {
      this.categoryName = params.get('name');
      this.loadCategoryData();
    });
  }

  // Load dynamic category data based on the query parameter 'name'
  loadCategoryData() {
    if (this.categoryName && this.isCategoryNameValid(this.categoryName)) {
      this.categoryData = this.getCategoryContent(this.categoryName);
    }
  }

  // Helper method to validate if the categoryName exists in the categories object
  isCategoryNameValid(name: string): name is keyof typeof this.categories {
    return name.toLowerCase() in this.categories;
  }

  // Retrieve the category content based on the name
  getCategoryContent(name: keyof typeof this.categories) {
    return this.categories[name.toLowerCase()];
  }
}
