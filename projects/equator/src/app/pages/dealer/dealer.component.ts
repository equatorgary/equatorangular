import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../../ui/src/public-api';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-dealer',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent],
  templateUrl: './dealer.component.html',
  styleUrl: './dealer.component.scss'
})
export class DealerComponent {

}
