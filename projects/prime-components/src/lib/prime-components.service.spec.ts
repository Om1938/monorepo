import { TestBed } from '@angular/core/testing';

import { PrimeComponentsService } from './prime-components.service';

describe('PrimeComponentsService', () => {
  let service: PrimeComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
