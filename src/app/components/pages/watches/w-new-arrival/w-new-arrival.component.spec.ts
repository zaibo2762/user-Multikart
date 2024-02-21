import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WNewArrivalComponent } from './w-new-arrival.component';

describe('WNewArrivalComponent', () => {
  let component: WNewArrivalComponent;
  let fixture: ComponentFixture<WNewArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WNewArrivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WNewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
