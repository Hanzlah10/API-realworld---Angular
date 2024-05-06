import { TestBed } from '@angular/core/testing';

import { PopularserviceService } from './popularservice.service';

describe('PopularserviceService', () => {
  let service: PopularserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
