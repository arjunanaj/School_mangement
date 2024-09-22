import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbstractComponent } from './add-abstract.component';

describe('AddAbstractComponent', () => {
  let component: AddAbstractComponent;
  let fixture: ComponentFixture<AddAbstractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAbstractComponent]
    });
    fixture = TestBed.createComponent(AddAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
