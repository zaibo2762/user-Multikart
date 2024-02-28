import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagBestsellerComponent } from './bag-bestseller.component';

describe('BagBestsellerComponent', () => {
  let component: BagBestsellerComponent;
  let fixture: ComponentFixture<BagBestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagBestsellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
