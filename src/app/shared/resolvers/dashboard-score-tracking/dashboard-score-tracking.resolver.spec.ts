import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TransunionService } from '@shared/services/transunion/transunion.service';

import { DashboardScoreTrackingResolver } from './dashboard-score-tracking.resolver';

//route: ActivatedRouteSnapshot, state: RouterStateSnapshot

describe('DashboardScoreTrackingResolver', () => {
  let resolver: DashboardScoreTrackingResolver;
  let transunionMock: any;
  let routeMock: any;
  let stateMock: any;

  beforeEach(() => {
    transunionMock = jasmine.createSpyObj('TransunionService', ['getCreditScores']);
    routeMock = jasmine.createSpyObj('ActivatedRouteSnapshot', ['getCreditScores']);
    stateMock = jasmine.createSpyObj('RouterStateSnapshot', ['getCreditScores']);

    TestBed.configureTestingModule({
      providers: [
        { provide: TransunionService, useValue: transunionMock },
        { provide: ActivatedRouteSnapshot, useValue: routeMock },
        { provide: RouterStateSnapshot, useValue: stateMock },
      ],
    });
    resolver = TestBed.inject(DashboardScoreTrackingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
