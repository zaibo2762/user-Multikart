import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerSaleComponent } from './flower-sale.component';

describe('FlowerSaleComponent', () => {
  let component: FlowerSaleComponent;
  let fixture: ComponentFixture<FlowerSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
