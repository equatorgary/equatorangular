import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListboxComponent } from './product-listbox.component';

describe('ProductListboxComponent', () => {
  let component: ProductListboxComponent;
  let fixture: ComponentFixture<ProductListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
