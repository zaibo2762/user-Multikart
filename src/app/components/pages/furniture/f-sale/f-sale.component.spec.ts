import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSaleComponent } from './f-sale.component';

describe('FSaleComponent', () => {
  let component: FSaleComponent;
  let fixture: ComponentFixture<FSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
