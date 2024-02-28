import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagNewarrivalComponent } from './bag-newarrival.component';

describe('BagNewarrivalComponent', () => {
  let component: BagNewarrivalComponent;
  let fixture: ComponentFixture<BagNewarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagNewarrivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagNewarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
