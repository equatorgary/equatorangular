import { Component, OnInit, HostListener } from '@angular/core';
import { ContainerComponent, HeadingComponent } from '../../../../ui/src/public-api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'eq-our-customers',
  standalone: true,
  imports: [ContainerComponent,HeadingComponent, NgFor],
  templateUrl: './our-customers.component.html',
  styleUrl: './our-customers.component.scss'
})
export class OurCustomersComponent {
  heading:string = 'Our Customers';
  customers: any = [
    {customer: 'https://www.equatorappliances.com/assets/img/clients/1.jpg'},
    {customer: 'https://www.equatorappliances.com/assets/img/clients/2.jpg'},
    {customer: 'https://www.equatorappliances.com/assets/img/clients/3.jpg'},
    {customer: 'https://www.equatorappliances.com/assets/img/clients/4.jpg'},
    {customer: 'https://www.equatorappliances.com/assets/img/clients/16.jpg'},
    {customer: 'https://www.equatorappliances.com/assets/img/clients/8.jpg'}
  ];
 
  duplicatedCustomers: any[] = [];
  currentSlide = 0;
  translateX = 0;
  slidesVisible = 3;
  totalSlides = this.customers.length;

  // Define a flag to check if the window object is available
  isBrowser = false;

  ngOnInit(): void {
    this.isBrowser = typeof window !== 'undefined'; // Set the flag in ngOnInit
    this.duplicateSlides();
    this.adjustSlidesVisible();
  }

  // Duplicate slides for infinite scrolling
  duplicateSlides() {
    this.duplicatedCustomers = [
      ...this.customers.slice(this.customers.length - this.slidesVisible),
      ...this.customers,
      ...this.customers.slice(0, this.slidesVisible),
    ];

    // Set the initial translate to be offset by the number of duplicated slides at the start
    this.currentSlide = this.slidesVisible;
    this.translateX = -(this.currentSlide * (100 / this.slidesVisible));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustSlidesVisible();
  }

  adjustSlidesVisible() {
    if (this.isBrowser) { // Only access window if in a browser
      const width = window.innerWidth;
      if (width > 1200) {
        this.slidesVisible = 5;
      } else if (width > 768) {
        this.slidesVisible = 3;
      } else {
        this.slidesVisible = 2;
      }
      this.duplicateSlides(); // Recalculate duplication when resizing
    }
  }

  prevSlide() {
    this.currentSlide--;
    this.updateTranslateX();

    // When we reach the duplicated set of slides at the start, jump to the end
    if (this.currentSlide < this.slidesVisible) {
      setTimeout(() => {
        this.currentSlide = this.totalSlides;
        this.updateTranslateX(false);
      }, 500); // Add timeout to allow transition to finish
    }
  }

  nextSlide() {
    this.currentSlide++;
    this.updateTranslateX();

    // When we reach the duplicated set of slides at the end, jump to the start
    if (this.currentSlide >= this.totalSlides + this.slidesVisible) {
      setTimeout(() => {
        this.currentSlide = this.slidesVisible;
        this.updateTranslateX(false);
      }, 500); // Add timeout to allow transition to finish
    }
  }

  // Update the slider's transform style
  updateTranslateX(animate: boolean = true) {
    if (animate) {
      this.translateX = -(this.currentSlide * (100 / this.slidesVisible));
    } else {
      // Disable transition for instant jump
      this.translateX = -(this.currentSlide * (100 / this.slidesVisible));
    }
  }

}
