import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

import { AccountDetailService } from './account-detail.service';

// private interstitial: InterstitialService,
// private disputeService: DisputeService,
// private router: Router,

describe('AccountDetailService', () => {
  let service: AccountDetailService;
  let interstitialMock: any;
  let disputeServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    interstitialMock = jasmine.createSpyObj('InterstitialService', ['changeMessage', 'openInterstitial']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['onUserConfirmed']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AccountDetailService,
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    service = TestBed.inject(AccountDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set showModal to false if actionForDispute is called and isConfirmed is truthy', () => {
    service.actionForDispute({ isConfirmed: true } as IOnboardingEvent);

    expect(service.showModal).toEqual(false);
  });
});
