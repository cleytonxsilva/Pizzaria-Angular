import { TestBed } from '@angular/core/testing';

import { SaborServiceService } from './sabor-service.service';

describe('SaborServiceService', () => {
  let service: SaborServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaborServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
