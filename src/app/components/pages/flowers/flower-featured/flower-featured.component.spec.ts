import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerFeaturedComponent } from './flower-featured.component';

describe('FlowerFeaturedComponent', () => {
  let component: FlowerFeaturedComponent;
  let fixture: ComponentFixture<FlowerFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerFeaturedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
