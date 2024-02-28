import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNewarrivalComponent } from './s-newarrival.component';

describe('SNewarrivalComponent', () => {
  let component: SNewarrivalComponent;
  let fixture: ComponentFixture<SNewarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SNewarrivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SNewarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
