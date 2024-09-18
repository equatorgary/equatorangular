import { Component, Input } from '@angular/core';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { ContainerComponent } from '../../../../ui/src/public-api';
import { NgIf } from '@angular/common';

@Component({
  selector: 'eq-page-header',
  standalone: true,
  imports: [BreadcrumbsComponent,ContainerComponent,NgIf],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
@Input() title: string = 'Page Title';
@Input() text?: string = 'Text';
@Input() breadcrumbs: true | false = true;
}
