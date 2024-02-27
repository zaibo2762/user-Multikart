import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsNewproductComponent } from './tools-newproduct.component';

describe('ToolsNewproductComponent', () => {
  let component: ToolsNewproductComponent;
  let fixture: ComponentFixture<ToolsNewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsNewproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsNewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
