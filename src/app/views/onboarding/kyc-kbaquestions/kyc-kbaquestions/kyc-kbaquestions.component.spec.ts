import { KycKbaquestionsComponent } from './kyc-kbaquestions.component';

import { BehaviorSubject, of, Subscription } from 'rxjs';
import { AgenciesStateModel } from '@store/agencies';
import { ITUServiceResponse } from '@shared/interfaces';

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
    spyOn(component, 'handleIncorrect')
    component.handleResponse({ data: undefined } as ITUServiceResponse<undefined>);
    expect(component.handleIncorrect).toHaveBeenCalled();
  });
});
