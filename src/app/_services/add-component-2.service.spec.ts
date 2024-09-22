import { TestBed } from '@angular/core/testing';

import { AddComponent2Service } from './add-component-2.service';

describe('AddComponent2Service', () => {
  let service: AddComponent2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddComponent2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
