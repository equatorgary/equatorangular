import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface SliderItem {
  image?: string;
  link?: string;
}

@Component({
  selector: 'eq-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() width?: any;
  @Input() height?: any;
  @Input() sliders: SliderItem[] = [];
  currentSlideIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliders.length;
  }

  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.sliders.length) % this.sliders.length;
  }
}
