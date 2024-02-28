import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFeaturedComponent } from './s-featured.component';

describe('SFeaturedComponent', () => {
  let component: SFeaturedComponent;
  let fixture: ComponentFixture<SFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFeaturedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
