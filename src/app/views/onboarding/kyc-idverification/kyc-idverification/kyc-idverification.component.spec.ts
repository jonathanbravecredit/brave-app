import { fakeAsync, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ITransunionKBAQuestion, ITUServiceResponse, IVerifyAuthenticationQuestionsResult } from '@shared/interfaces';
import { AppStatusReason } from '@shared/utils/brave/constants';
import { KycIdverificationComponent } from '@views/onboarding/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { BehaviorSubject } from 'rxjs';

// private router: Router,
// private store: Store,
// private kycService: KycService,
// private analytics: AnalyticsService,
// private interstitial: InterstitialService,

const setup = () => {
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const storeMock = jasmine.createSpyObj('Store', ['snapshot']);
  const kycServiceMock = jasmine.createSpyObj('KycService', [
    'activateStep',
    'inactivateStep',
    'incrementPinRequest',
    'getPassCodeAnswer',
    'sendVerifyAuthenticationQuestions',
    'completeStep',
    'updateAuthenticatedOn',
    'sendEnrollRequest',
    'setCreditReport',
    'getUserSub',
    'updateTransunion',
    'handleVerificationInProgressFlow',
    'handleSuspension',
    'bailoutFromOnboarding',
    'getPassCodeQuestion',
    'incrementPinAttempts',
  ]);
  const analyticsMock = jasmine.createSpyObj('AnalyticsService', ['firePageViewEvent', 'fireClickEvent']);
  const interstitial = jasmine.createSpyObj('InterstitialService', [''], {
    fetching$: new BehaviorSubject<boolean>(false),
  });

  const component = new KycIdverificationComponent(routerMock, storeMock, kycServiceMock, analyticsMock, interstitial);

  return { component, routerMock, storeMock, kycServiceMock, analyticsMock, interstitial };
};

describe('KycIdverificationComponent', () => {
  const { component, routerMock, storeMock, kycServiceMock, analyticsMock, interstitial } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run firePageViewEvent on Init', () => {
    component.ngOnInit();
    expect(analyticsMock.firePageViewEvent).toHaveBeenCalled();
  });

  it('should run activateStep on Init', () => {
    component.ngOnInit();
    expect(kycServiceMock.activateStep).toHaveBeenCalled();
  });

  it('should run inactivateStep on goBack', () => {
    component.goBack();
    expect(kycServiceMock.inactivateStep).toHaveBeenCalled();
  });

  it('should run navigate on goBack', () => {
    component.goBack();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should set viewState to viewState passed in when updateViewState is run', () => {
    component.updateViewState('sent');
    expect(component.viewState).toEqual('sent');
  });

  it('should run updateViewState on processRequest', () => {
    spyOn(component, 'updateViewState');
    component.processRequest('', false);
    expect(component.updateViewState).toHaveBeenCalled();
  });

  it('should run snapshot on processRequest', () => {
    storeMock.snapshot.and.returnValue({ appData: {} });
    component.processRequest('', false);
    expect(storeMock.snapshot).toHaveBeenCalled();
  });

  it('should run handleAPIError on processRequest if pinAge is falsy or pinAttempts is not >=0', () => {
    storeMock.snapshot.and.returnValue({ appData: {} });
    spyOn(component, 'handleAPIError');
    component.processRequest('', false);
    expect(component.handleAPIError).toHaveBeenCalled();
  });

  it('should run handleSuspension on processRequest if pinAge is truthy and pinAttempts is >=3', () => {
    storeMock.snapshot.and.returnValue({ appData: { agencies: { transunion: { pinCurrentAge: 1, pinAttempts: 2 } } } });
    spyOn(component, 'handleSuspension');
    component.processRequest('', false);
    expect(component.handleSuspension).toHaveBeenCalled();
  });

  it('should run handleSuspension on processRequest if pinAge is truthy and pinAttempts is >=3', () => {
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: 15 * 60 * 1000, pinAttempts: 2 } } },
    });
    spyOn(component, 'handleSuspension');
    component.processRequest('', false);
    expect(component.handleSuspension).toHaveBeenCalled();
  });

  it('should run incrementPinRequest on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is true', fakeAsync(() => {
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', true);
    tick();
    expect(kycServiceMock.incrementPinRequest).toHaveBeenCalled();
  }));

  it('should run incrementPinAttempts on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is true', fakeAsync(() => {
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(kycServiceMock.incrementPinAttempts).toHaveBeenCalled();
  }));

  it('should run getAuthenticationQuestions on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is true', fakeAsync(() => {
    spyOn(component, 'getAuthenticationQuestions');
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(component.getAuthenticationQuestions).toHaveBeenCalled();
  }));

  it('should run getPassCodeAnswer on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is true', fakeAsync(() => {
    let spy = spyOn(component, 'getAuthenticationQuestions');
    spy.and.returnValue({} as ITransunionKBAQuestion);
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(kycServiceMock.getPassCodeAnswer).toHaveBeenCalled();
  }));

  it('should run sendVerifyAuthenticationQuestions on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is true', fakeAsync(() => {
    let spy = spyOn(component, 'getAuthenticationQuestions');
    spy.and.returnValue({} as ITransunionKBAQuestion);
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(kycServiceMock.sendVerifyAuthenticationQuestions).toHaveBeenCalled();
  }));

  it('should run bailOut on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is false and resp.sucess is false', fakeAsync(() => {
    spyOn(component, 'bailOut');
    let spy = spyOn(component, 'getAuthenticationQuestions');
    spy.and.returnValue({} as ITransunionKBAQuestion);
    kycServiceMock.sendVerifyAuthenticationQuestions.and.returnValue(
      Promise.resolve(({ data: undefined, success: false } as ITUServiceResponse<
        IVerifyAuthenticationQuestionsResult | undefined
      >)),
    );
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(component.bailOut).toHaveBeenCalled();
  }));

  it('should run handleResponse on processRequest if pinAge is truthy and pinAttempts is not >=3 and newPin is false and resp.sucess is true', fakeAsync(() => {
    spyOn(component, 'handleResponse');
    let spy = spyOn(component, 'getAuthenticationQuestions');
    spy.and.returnValue({} as ITransunionKBAQuestion);
    kycServiceMock.sendVerifyAuthenticationQuestions.and.returnValue(
      Promise.resolve(({ data: undefined, success: true } as ITUServiceResponse<
        IVerifyAuthenticationQuestionsResult | undefined
      >)),
    );
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(component.handleResponse).toHaveBeenCalled();
  }));

  it('should run updateViewState on processRequest if pinAge is truthy and pinAttempts is not >=3 and newpin is true', fakeAsync(() => {
    spyOn(component, 'updateViewState');
    let spy = spyOn(component, 'getAuthenticationQuestions');
    spy.and.returnValue({} as ITransunionKBAQuestion);
    kycServiceMock.sendVerifyAuthenticationQuestions.and.returnValue({ sucess: false });
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', true);
    tick();
    expect(component.updateViewState).toHaveBeenCalled();
  }));

  it('should run fetching$.next on processRequest if pinAge is truthy and pinAttempts is not >=3', fakeAsync(() => {
    let spy = spyOn(component, 'getAuthenticationQuestions');
    spyOn(interstitial.fetching$, 'next');
    spy.and.returnValue({} as ITransunionKBAQuestion);
    storeMock.snapshot.and.returnValue({
      appData: { agencies: { transunion: { pinCurrentAge: new Date().valueOf() + 10000, pinAttempts: 2 } } },
    });
    component.processRequest('', false);
    tick();
    expect(interstitial.fetching$.next).toHaveBeenCalled();
  }));

  it('should run processRequest on resendCose', () => {
    spyOn(component, 'processRequest')
    component.resendCode()
    expect(component.processRequest).toHaveBeenCalled()
  })

  it('should run fireClickEvent on goToNext', () => {
    component.goToNext({} as FormGroup)
    expect(analyticsMock.fireClickEvent).toHaveBeenCalled()
  })

  it('should run formatAttributes on goToNext', () => {
    spyOn(component, 'formatAttributes').and.returnValue({ code: '197' });
    component.goToNext({valid: true} as FormGroup);
    expect(component.formatAttributes).toHaveBeenCalled()
  })

  it('should run processRequest on goToNext', () => {
    spyOn(component, 'processRequest')
    component.goToNext({valid: true} as FormGroup)
    expect(component.processRequest).toHaveBeenCalled()
  })

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

  it('should run updateViewState on handleIncorrect', fakeAsync(() => {
    spyOn(component, 'updateViewState');
    component.handleIncorrect({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(component.updateViewState).toHaveBeenCalled();
  }));

  it('should run fetching$.next on handleIncorrect', fakeAsync(() => {
    spyOn(interstitial.fetching$, 'next');
    component.handleIncorrect({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(interstitial.fetching$.next).toHaveBeenCalled();
  }));

  it('should run handleVerificationInProgressFlow on handleInProgress', fakeAsync(() => {
    component.handleInProgress({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(kycServiceMock.handleVerificationInProgressFlow).toHaveBeenCalled();
  }));

  it('should run fetching$.next on handleInProgress', fakeAsync(() => {
    spyOn(interstitial.fetching$, 'next');
    component.handleInProgress({ data: undefined } as ITUServiceResponse<undefined>);
    tick();
    expect(interstitial.fetching$.next).toHaveBeenCalled();
  }));

  it('should run handleSuspension on handleSuspension', fakeAsync(() => {
    component.handleSuspension(AppStatusReason.Active);
    tick();
    expect(kycServiceMock.handleSuspension).toHaveBeenCalled();
  }));

  it('should run fetching$.next on handleSuspension', fakeAsync(() => {
    spyOn(interstitial.fetching$, 'next');
    component.handleSuspension(AppStatusReason.Active);
    tick();
    expect(interstitial.fetching$.next).toHaveBeenCalled();
  }));

  it('should run updateViewState on handleError', () => {
    spyOn(component, 'updateViewState')
    component.handleError();
    expect(component.updateViewState).toHaveBeenCalled();
  });

  it('should run fetching$.next on handleError', () => {
    spyOn(interstitial.fetching$, 'next');
    component.handleError();
    expect(interstitial.fetching$.next).toHaveBeenCalled();
  });

  it('should run router.navigate on handleAPIError', () => {
    component.handleAPIError();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run fetching$.next on handleAPIError', () => {
    spyOn(interstitial.fetching$, 'next');
    component.handleAPIError();
    expect(interstitial.fetching$.next).toHaveBeenCalled();
  });

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

  
});

//START AT RESEND CODE AND GO DOWN
