import { Component, Input } from '@angular/core';

@Component({
  selector: 'Container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
@Input() fullwidth: true | false = false
}
