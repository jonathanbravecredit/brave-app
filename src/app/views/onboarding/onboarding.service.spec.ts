import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngxs/store';
import { StateService } from '@shared/services/state/state.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { of } from 'rxjs';

import { OnboardingService } from './onboarding.service';

describe('OnboardingService', () => {
  let service: OnboardingService;
  let storeMock: any;
  let stateServiceMock: any;
  let syncServiceMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['select']);
    stateServiceMock = jasmine.createSpyObj('StateService', ['updateAbandonedStatusAsync']);
    syncServiceMock = jasmine.createSpyObj('SyncService', [
      'isUserBrandNew',
      'initAppData',
      'subscribeToListeners',
      'syncDBDownToState',
    ]);
    storeMock.select.and.returnValue(of({}));
    stateServiceMock.updateAbandonedStatusAsync.and.returnValue(null);
    syncServiceMock.isUserBrandNew.and.returnValue(true);
    syncServiceMock.initAppData.and.returnValue(of().toPromise());
    syncServiceMock.subscribeToListeners.and.returnValue(of().toPromise());
    syncServiceMock.syncDBDownToState.and.returnValue(of({}).toPromise());

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        OnboardingService,
        { provide: Store, useValue: storeMock },
        { provide: StateService, useValue: stateServiceMock },
        { provide: SyncService, useValue: syncServiceMock },
      ],
    });
    service = TestBed.inject(OnboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
