import { TestBed } from '@angular/core/testing';

import { EmployeeBasicDetailService } from './employee-basic-detail.service';

describe('EmployeeBasicDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeBasicDetailService = TestBed.get(EmployeeBasicDetailService);
    expect(service).toBeTruthy();
  });
});
