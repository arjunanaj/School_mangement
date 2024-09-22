import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent1Component } from './add-component1.component';

describe('AddComponent1Component', () => {
  let component: AddComponent1Component;
  let fixture: ComponentFixture<AddComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent1Component]
    });
    fixture = TestBed.createComponent(AddComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
