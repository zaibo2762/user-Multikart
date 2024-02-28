import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBestsellerComponent } from './s-bestseller.component';

describe('SBestsellerComponent', () => {
  let component: SBestsellerComponent;
  let fixture: ComponentFixture<SBestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SBestsellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
