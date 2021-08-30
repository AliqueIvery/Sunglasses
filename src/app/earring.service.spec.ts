import { TestBed } from '@angular/core/testing';

import { EarringService } from './earring.service';

describe('EarringService', () => {
  let service: EarringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
