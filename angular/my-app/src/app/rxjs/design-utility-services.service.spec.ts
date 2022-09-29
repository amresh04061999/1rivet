import { TestBed } from '@angular/core/testing';

import { DesignUtilityServicesService } from './design-utility-services.service';

describe('DesignUtilityServicesService', () => {
  let service: DesignUtilityServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtilityServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
