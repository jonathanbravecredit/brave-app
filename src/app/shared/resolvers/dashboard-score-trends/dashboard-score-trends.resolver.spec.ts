import { TestBed } from '@angular/core/testing';
import { TransunionService } from '@shared/services/transunion/transunion.service';

import { DashboardScoreTrendsResolver } from './dashboard-score-trends.resolver';

//private transunion: TransunionService

describe('DashboardScoreTrendsResolver', () => {
  let resolver: DashboardScoreTrendsResolver;
  let transunionMock: any;

  beforeEach(() => {
    transunionMock = jasmine.createSpyObj('TransunionService', ['']);
    TestBed.configureTestingModule({ providers: [{ provide: TransunionService, useValue: transunionMock }] });
    resolver = TestBed.inject(DashboardScoreTrendsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
