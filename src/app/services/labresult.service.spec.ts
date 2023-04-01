import { TestBed } from '@angular/core/testing';

import { LabresultService } from './labresult.service';

describe('LabresultService', () => {
  let service: LabresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
