import {TestBed} from '@angular/core/testing';

import {ClvAngularDirectivesUtilitiesService} from './clv-angular-directives-utilities.service';

describe('ClvAngularDirectivesUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClvAngularDirectivesUtilitiesService = TestBed.get(ClvAngularDirectivesUtilitiesService);
    expect(service).toBeTruthy();
  });
});
