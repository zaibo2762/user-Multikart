import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBestsellerComponent } from './m-bestseller.component';

describe('MBestsellerComponent', () => {
  let component: MBestsellerComponent;
  let fixture: ComponentFixture<MBestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MBestsellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
