import { Component, signal } from '@angular/core';

@Component({
  selector: 'uHeader',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  // Mock data for demo
  flagIcon = 'assets/images/flag-us.png';
  logoImage = 'assets/images/logo.png';
  cartCount = 3;
}
