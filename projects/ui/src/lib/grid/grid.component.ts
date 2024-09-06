import { NgClass, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'Grid',
  standalone: true,
  imports: [NgClass],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() desktop: any = 12;
  @Input() mobile: any = 6;
  isDesktop: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkWindowSize();
      window!.addEventListener('resize', this.checkWindowSize.bind(this));
    }
  }

  private checkWindowSize(): void {
    this.isDesktop = window.innerWidth >= 768;
  }
}
