import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBestsellerComponent } from './e-bestseller.component';

describe('EBestsellerComponent', () => {
  let component: EBestsellerComponent;
  let fixture: ComponentFixture<EBestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBestsellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
