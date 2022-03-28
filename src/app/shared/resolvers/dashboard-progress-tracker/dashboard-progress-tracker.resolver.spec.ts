import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';

import { DashboardProgressTrackerResolver } from './dashboard-progress-tracker.resolver';

//private store: Store, private progressTrackerService: ProgressTrackerService

describe('DashboardProgressTrackerResolver', () => {
  let resolver: DashboardProgressTrackerResolver;
  let storeMock: any;
  let progressTrackerServiceMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['']);
    progressTrackerServiceMock = jasmine.createSpyObj('ProgressTrackerService', ['']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: ProgressTrackerService, useValue: progressTrackerServiceMock },
      ],
    });
    resolver = TestBed.inject(DashboardProgressTrackerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
