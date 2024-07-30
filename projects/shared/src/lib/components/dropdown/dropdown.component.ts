import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'eq-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  isOpen = false;
  selectedValue: string = '';

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    this.isOpen = false;
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selectedValue = option;
    this.optionSelected.emit(option);
    this.isOpen = false;
  }
}