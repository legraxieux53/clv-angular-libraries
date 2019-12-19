import {TestBed} from '@angular/core/testing';

import {ClvTsUtilsService} from './clv-ts-utils.service';

describe('ClvTsUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClvTsUtilsService = TestBed.get(ClvTsUtilsService);
    expect(service).toBeTruthy();
  });
});
