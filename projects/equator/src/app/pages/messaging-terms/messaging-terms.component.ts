import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../../ui/src/public-api';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-messaging-terms',
  standalone: true,
  imports: [ContainerComponent,PageHeaderComponent],
  templateUrl: './messaging-terms.component.html',
  styleUrl: './messaging-terms.component.scss'
})
export class MessagingTermsComponent {

}
