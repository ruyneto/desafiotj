import { TestBed } from '@angular/core/testing';

import { RequisitionPersonService } from './requisition-person.service';

describe('RequisitionPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequisitionPersonService = TestBed.get(RequisitionPersonService);
    expect(service).toBeTruthy();
  });
});
