import { TestBed } from '@angular/core/testing';

import { AddAbstractService } from './add-abstract.service';

describe('AddAbstractService', () => {
  let service: AddAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
