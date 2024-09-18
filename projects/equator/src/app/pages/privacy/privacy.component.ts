import { Component } from '@angular/core';
import { ContainerComponent } from '../../../../../ui/src/public-api';
import { PageHeaderComponent } from '../../../../../shared/src/public-api';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [ContainerComponent, PageHeaderComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

}
