import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOnsaleComponent } from './e-onsale.component';

describe('EOnsaleComponent', () => {
  let component: EOnsaleComponent;
  let fixture: ComponentFixture<EOnsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EOnsaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EOnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
