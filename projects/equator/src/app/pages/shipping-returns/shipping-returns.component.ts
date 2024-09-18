import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../../ui/src/public-api';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-shipping-returns',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent],
  templateUrl: './shipping-returns.component.html',
  styleUrl: './shipping-returns.component.scss'
})
export class ShippingReturnsComponent {

}
