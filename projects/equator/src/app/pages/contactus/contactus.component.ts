import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../../ui/src/public-api';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

}
