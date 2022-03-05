import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { AuthService } from '@shared/services/auth/auth.service';

import { ProgressTrackerService } from './progress-tracker-service.service';

// private store: Store,
// private auth: AuthService,

describe('ProgressTrackerServiceService', () => {
  let service: ProgressTrackerService;
  let storeMock: any
  let authMock: any

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['subscribe'])
    authMock = jasmine.createSpyObj('AuthService', [''])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
      {provide: Store, useValue: storeMock},
      {provide: AuthService, useValue: authMock},
    ]});
    service = TestBed.inject(ProgressTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
