import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBestComponent } from './f-best.component';

describe('FBestComponent', () => {
  let component: FBestComponent;
  let fixture: ComponentFixture<FBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FBestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
