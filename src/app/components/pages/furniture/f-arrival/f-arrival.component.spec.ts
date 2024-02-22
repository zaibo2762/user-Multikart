import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FArrivalComponent } from './f-arrival.component';

describe('FArrivalComponent', () => {
  let component: FArrivalComponent;
  let fixture: ComponentFixture<FArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FArrivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
