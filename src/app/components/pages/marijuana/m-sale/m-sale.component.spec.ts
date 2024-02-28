import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSaleComponent } from './m-sale.component';

describe('MSaleComponent', () => {
  let component: MSaleComponent;
  let fixture: ComponentFixture<MSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
