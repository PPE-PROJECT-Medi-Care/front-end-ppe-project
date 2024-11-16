import { TestBed } from '@angular/core/testing';

import { ApiappoinmentService } from './apiappoinment.service';

describe('ApiappoinmentService', () => {
  let service: ApiappoinmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiappoinmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
