import { TestBed } from '@angular/core/testing';

import { AddComponent1Service } from './add-component-1.service';

describe('AddComponent1Service', () => {
  let service: AddComponent1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddComponent1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
