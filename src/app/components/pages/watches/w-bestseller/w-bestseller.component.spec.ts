import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WBestsellerComponent } from './w-bestseller.component';

describe('WBestsellerComponent', () => {
  let component: WBestsellerComponent;
  let fixture: ComponentFixture<WBestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WBestsellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
