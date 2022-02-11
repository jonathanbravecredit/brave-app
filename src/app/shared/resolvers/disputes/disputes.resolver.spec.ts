import { TestBed } from '@angular/core/testing';
import { TransunionService } from '@shared/services/transunion/transunion.service';

import { DisputesResolver } from './disputes.resolver';

describe('DisputesResolver', () => {
  let resolver: DisputesResolver;
  let transunionMock: any;

  beforeEach(() => {
    transunionMock = jasmine.createSpyObj('TransunionService', ['']);
    TestBed.configureTestingModule({
      providers: [{
        provide: TransunionService, useValue: transunionMock
      }]
    });
    resolver = TestBed.inject(DisputesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
