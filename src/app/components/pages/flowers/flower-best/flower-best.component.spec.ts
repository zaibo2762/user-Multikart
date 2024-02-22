import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBestComponent } from './flower-best.component';

describe('FlowerBestComponent', () => {
  let component: FlowerBestComponent;
  let fixture: ComponentFixture<FlowerBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerBestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
