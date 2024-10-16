import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';
import { ContainerComponent } from '../../../../../ui/src/public-api';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [PageHeaderComponent,ContainerComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
