import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/src/lib/header/header.component";
import { FooterComponent } from "../../../../shared/src/lib/footer/footer.component";

@Component({
  selector: 'eq-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
