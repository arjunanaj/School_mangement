import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInfo1Component } from './component-info1.component';

describe('ComponentInfo1Component', () => {
  let component: ComponentInfo1Component;
  let fixture: ComponentFixture<ComponentInfo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentInfo1Component]
    });
    fixture = TestBed.createComponent(ComponentInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
