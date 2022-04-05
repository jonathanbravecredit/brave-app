import { KycKbaquestionsComponent } from './kyc-kbaquestions.component';

import { BehaviorSubject, of, Subscription } from 'rxjs';
import { AgenciesStateModel } from '@store/agencies';
import { ITUServiceResponse, IVerifyAuthenticationQuestionsResult } from '@shared/interfaces';
import { fakeAsync, tick } from '@angular/core/testing';
import { AppStatusReason } from '@shared/utils/brave/constants';

// private router: Router,
// private interstitial: InterstitialService,
// private kycService: KycService,
// private analytics: AnalyticsService,
// private store: Store,

const setup = () => {
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const interstitialMock = jasmine.createSpyObj('InterstitialService', [''], {
    fetching$: new BehaviorSubject<boolean>(false),
  });
  const kycServiceMock = jasmine.createSpyObj('KycService', [
    'sendVerifyAuthenticationQuestions',
    'activateStep',
    'inactivateStep',
    'completeStep',
    'updateAuthenticatedOn',
    'setCreditReport',
    'getUserSub',
    'updateTransunion',
    'handleVerificationInProgressFlow',
    'handleSuspension',
    'bailoutFromOnboarding',
    'updateGetAuthenticationQuestions',
    'bailoutFromOnboarding',
    'sendEnrollRequest',
  ]);
  const analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent', 'fireClickEvent']);
  const storeMock = jasmine.createSpyObj('Store', ['snapshot', 'select']);

  const component = new KycKbaquestionsComponent(
    routerMock,
    interstitialMock,
    kycServiceMock,
    analyticsMock,
    storeMock,
  );

  return { component, routerMock, interstitialMock, kycServiceMock, analyticsMock, storeMock };
};

describe('KycKbaquestionsComponent', () => {
  const { component, routerMock, interstitialMock, kycServiceMock, analyticsMock, storeMock } = setup();

  beforeEach(() => {
    storeMock.select.and.returnValue(of({} as AgenciesStateModel));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run firePageViewEvent on init', () => {
    component.ngOnInit();
    expect(analyticsMock.firePageViewEvent).toHaveBeenCalled();
  });

  it('should run activateStep on init', () => {
    component.ngOnInit();
    expect(kycServiceMock.activateStep).toHaveBeenCalled();
  });

  it('should agenciesSub$.unsubscribe on destroy', () => {
    component.agenciesSub$ = new Subscription();
    spyOn(component.agenciesSub$, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.agenciesSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should run inactivateStep on goBack if answeredQuestion length is 0', () => {
    component.answeredQuestions = [];
    component.goBack();
    expect(kycServiceMock.inactivateStep).toHaveBeenCalled();
  });

  it('should run navigate on goBack if answeredQuestion length is 0', () => {
    component.answeredQuestions = [];
    component.goBack();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run fireClickEvent on goToNext', () => {
    component.goToNext();
    expect(analyticsMock.fireClickEvent).toHaveBeenCalled();
  });

  it('should run handleIncorrect on handleResponse if no data', () => {
    spyOn(component, 'handleIncorrect');
    component.handleResponse({ data: undefined } as ITUServiceResponse<undefined>);
    expect(component.handleIncorrect).toHaveBeenCalled();
  });

  it('should run handleSuccess on handleResponse if data and type is "success" and status is "correct"', () => {
    spyOn(component, 'handleSuccess');
    component.handleResponse({
      data: { ResponseType: 'success', AuthenticationStatus: 'correct' },
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult>);
    expect(component.handleSuccess).toHaveBeenCalled();
  });

  it('should run handleIncorrect on handleResponse if data and type is "success" and status is "incorrect"', () => {
    spyOn(component, 'handleIncorrect');
    component.handleResponse({
      data: { ResponseType: 'success', AuthenticationStatus: 'incorrect' },
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult>);
    expect(component.handleIncorrect).toHaveBeenCalled();
  });

  it('should run handleInProgress on handleResponse if data and type is "success" and status is "inprogress"', () => {
    spyOn(component, 'handleInProgress');
    component.handleResponse({
      data: { ResponseType: 'success', AuthenticationStatus: 'inprogress' },
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult>);
    expect(component.handleInProgress).toHaveBeenCalled();
  });

  it('should run handleIncorrect on handleResponse if data and type is not "success"', () => {
    spyOn(component, 'handleIncorrect');
    component.handleResponse({
      data: { ResponseType: 'test', AuthenticationStatus: 'test' },
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult>);
    expect(component.handleIncorrect).toHaveBeenCalled();
  });

  it('should run completeStep on handleSuccess', () => {
    component.handleSuccess();
    expect(kycServiceMock.completeStep).toHaveBeenCalled();
  });

  it('should run updateAuthenticatedOn on handleSuccess', () => {
    component.handleSuccess();
    expect(kycServiceMock.updateAuthenticatedOn).toHaveBeenCalled();
  });

  it('should run sendEnrollRequest on handleSuccess', () => {
    kycServiceMock.sendEnrollRequest.and.returnValue({ success: false, error: undefined, data: {} });
    component.handleSuccess();
    expect(kycServiceMock.sendEnrollRequest).toHaveBeenCalled();
  });

  it('should run setCreditReport on handleSuccess if success is truthy', fakeAsync(() => {
    kycServiceMock.sendEnrollRequest.and.returnValue({ success: true, error: undefined, data: {} });
    component.handleSuccess();
    tick();
    expect(kycServiceMock.setCreditReport).toHaveBeenCalled();
  }));

  it('should run getUserSub on handleSuccess', () => {
    kycServiceMock.sendEnrollRequest.and.returnValue({ success: false, error: undefined, data: {} });
    component.handleSuccess();
    expect(kycServiceMock.getUserSub).toHaveBeenCalled();
  });

  it('should run navigate on handleSuccess if success is truthy', () => {
    kycServiceMock.sendEnrollRequest.and.returnValue({ success: true, error: undefined, data: {} });
    component.handleSuccess();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run handleSuspension on handleSuccess if success is falsy', fakeAsync(() => {
    spyOn(component, 'handleSuspension');
    kycServiceMock.sendEnrollRequest.and.returnValue({ success: false, error: undefined, data: {} });
    component.handleSuccess();
    tick();
    expect(component.handleSuspension).toHaveBeenCalled();
  }));

  it('should run updateTransunion on handleIncorrect', () => {
    component.handleIncorrect({ data: undefined } as ITUServiceResponse<undefined>);
    expect(kycServiceMock.updateTransunion).toHaveBeenCalled();
  });

  it('should run handleSuspension on handleIncorrect', fakeAsync(() => {
    spyOn(component, 'handleSuspension');
    component.handleIncorrect({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(component.handleSuspension).toHaveBeenCalled();
  }));

  it('should run fetching$.next on handleIncorrect', fakeAsync(() => {
    spyOn(interstitialMock.fetching$, 'next');
    component.handleIncorrect({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  }));

  it('should run handleVerificationInProgressFlow on handleInProgress', fakeAsync(() => {
    component.handleInProgress({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(kycServiceMock.handleVerificationInProgressFlow).toHaveBeenCalled();
  }));

  it('should run fetching$.next on handleInProgress', fakeAsync(() => {
    spyOn(interstitialMock.fetching$, 'next');
    component.handleInProgress({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  }));

  it('should run navigate on handleAPIError', () => {
    component.handleAPIError();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run fetching$.next on handleAPIError', () => {
    spyOn(interstitialMock.fetching$, 'next');
    component.handleAPIError();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it('should run handleSuspension on handleSuspension', fakeAsync(() => {
    component.handleSuspension(AppStatusReason.Active);
    tick();
    expect(kycServiceMock.handleSuspension).toHaveBeenCalled();
  }));

  it('should run fetching$.next on handleSuspension', fakeAsync(() => {
    spyOn(interstitialMock.fetching$, 'next');
    component.handleSuspension(AppStatusReason.Active);
    tick();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  }));

  it('should run handleSuspension on bailOut', fakeAsync(() => {
    spyOn(component, 'createTuPartial');
    component.bailOut({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(component.createTuPartial).toHaveBeenCalled();
  }));

  it('should run bailoutFromOnboarding on bailOut', fakeAsync(() => {
    component.bailOut({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(kycServiceMock.bailoutFromOnboarding).toHaveBeenCalled();
  }));

  it('should run updateGetAuthenticationQuestions on handleBailout', () => {
    component.handleBailout({ data: undefined } as ITUServiceResponse<undefined>);
    expect(kycServiceMock.updateGetAuthenticationQuestions).toHaveBeenCalled();
  });

  it('should run bailoutFromOnboarding on handleBailout', () => {
    component.handleBailout({ data: undefined } as ITUServiceResponse<undefined>);
    expect(kycServiceMock.bailoutFromOnboarding).toHaveBeenCalled();
  });
});
