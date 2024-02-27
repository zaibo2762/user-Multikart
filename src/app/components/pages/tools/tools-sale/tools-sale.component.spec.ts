import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSaleComponent } from './tools-sale.component';

describe('ToolsSaleComponent', () => {
  let component: ToolsSaleComponent;
  let fixture: ComponentFixture<ToolsSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
