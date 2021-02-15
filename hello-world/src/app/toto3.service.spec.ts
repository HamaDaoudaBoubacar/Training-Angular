import { TestBed } from '@angular/core/testing';

import { Toto3Service } from './toto3.service';

describe('Toto3Service', () => {
  let service: Toto3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toto3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
