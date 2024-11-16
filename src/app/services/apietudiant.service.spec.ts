import { TestBed } from '@angular/core/testing';

import { ApietudiantService } from './apietudiant.service';

describe('ApietudiantService', () => {
  let service: ApietudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApietudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
