import {TestBed} from '@angular/core/testing';

import {ClvAngularAnimationsService} from './clv-angular-animations.service';

describe('ClvAngularAnimationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClvAngularAnimationsService = TestBed.get(ClvAngularAnimationsService);
    expect(service).toBeTruthy();
  });
});
