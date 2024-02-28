import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagTrendingComponent } from './bag-trending.component';

describe('BagTrendingComponent', () => {
  let component: BagTrendingComponent;
  let fixture: ComponentFixture<BagTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagTrendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
