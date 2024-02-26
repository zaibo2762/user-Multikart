import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFeaturedProductComponent } from './e-featured-product.component';

describe('EFeaturedProductComponent', () => {
  let component: EFeaturedProductComponent;
  let fixture: ComponentFixture<EFeaturedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EFeaturedProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EFeaturedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
