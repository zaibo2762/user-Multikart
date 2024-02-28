import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSaleComponent } from './s-sale.component';

describe('SSaleComponent', () => {
  let component: SSaleComponent;
  let fixture: ComponentFixture<SSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
