import { TestBed } from '@angular/core/testing';
import { APIService } from '@shared/services/aws/api.service';
import { SafeListMonitoringService } from '@shared/services/safeListMonitoring/safe-list-monitoring.service';

import { TransunionService } from './transunion.service';

//private api: APIService, private safeListMonitoringService: SafeListMonitoringService

describe('TransunionService', () => {
  let service: TransunionService;
  let apiMock: any;
  let safeListMonitoringMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj('APIService', ['Transunion']);
    safeListMonitoringMock = jasmine.createSpyObj('SafeListMonitoringService', ['fireClickEvent']);
    TestBed.configureTestingModule({
      providers: [
        { provide: APIService, useValue: apiMock },
        { provide: SafeListMonitoringService, useValue: safeListMonitoringMock },
      ],
    });
    service = TestBed.inject(TransunionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
