import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { InitiativeTask } from '@bravecredit/brave-sdk/dist/models/user-initiative/initiative/initiative';
import { Store } from '@ngxs/store';
import { ICircleProgressStep } from '@shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar';
import { InitiativeSubTask, Initiative } from '@shared/interfaces/progress-tracker.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';
import { of, Subscription } from 'rxjs';

import { ProgressTrackerService } from './progress-tracker-service.service';

// private store: Store,
// private auth: AuthService,

describe('ProgressTrackerServiceService', () => {
  let service: ProgressTrackerService;
  let storeMock: any
  let authMock: any

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['subscribe', 'dispatch'])
    authMock = jasmine.createSpyObj('AuthService', ['getIdTokenJwtTokens'])
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

  it('it should run initiativeSub$.unsubscribe on destroy', () => {
    service.initiativeSub$ = new Subscription()
    spyOn(service.initiativeSub$, 'unsubscribe')
    service.ngOnDestroy()
    expect(service.initiativeSub$.unsubscribe).toHaveBeenCalled()
  })

  it('it should run storeSub$.unsubscribe on destroy', () => {
    service.storeSub$ = new Subscription()
    spyOn(service.storeSub$, 'unsubscribe')
    service.ngOnDestroy()
    expect(service.storeSub$.unsubscribe).toHaveBeenCalled()
  })

  it('it should run store.subscribe on subscribeToStoreValues', () => {
    service.subscribeToStoreValues()
    expect(storeMock.subscribe).toHaveBeenCalled()
  })

  it('it should return 0 on findFutureScore if initiative?.initiativeTasks is falsy', () => {
    service.initiative = null
    let res = service.findFutureScore()
    expect(res).toEqual(0)
  })

  it('it should run initiativeSteps.forEach on updateSteps', () => {
    service.initiativeSteps = [{} as ICircleProgressStep]
    spyOn(service.initiativeSteps, 'forEach')
    service.updateSteps({} as InitiativeSubTask)
    expect(service.initiativeSteps.forEach).toHaveBeenCalled()
  })

  it('it should run store.dispatch on updateProgressTrackerState', () => {
    service.updateProgressTrackerState({} as Initiative)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('it should run auth.getIdTokenJwtTokens on getProgressTrackerData', () => {
    service.getProgressTrackerData()
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled()
  })

  it('it should run auth.getIdTokenJwtTokens on postUserGoal', () => {
    service.postUserGoal({} as IGoalInfo)
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled()
  })

  it('it should run auth.getIdTokenJwtTokens on postThenGetUserGoal', () => {
    service.postThenGetUserGoal({} as IGoalInfo)
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled()
  })
});
