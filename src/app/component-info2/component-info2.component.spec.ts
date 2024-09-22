import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInfo2Component } from './component-info2.component';

describe('ComponentInfo2Component', () => {
  let component: ComponentInfo2Component;
  let fixture: ComponentFixture<ComponentInfo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentInfo2Component]
    });
    fixture = TestBed.createComponent(ComponentInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
