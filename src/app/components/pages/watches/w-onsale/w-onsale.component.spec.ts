import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOnsaleComponent } from './w-onsale.component';

describe('WOnsaleComponent', () => {
  let component: WOnsaleComponent;
  let fixture: ComponentFixture<WOnsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WOnsaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WOnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
