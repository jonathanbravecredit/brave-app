import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { AuthService } from '../auth/auth.service';
import { InterstitialService } from '../interstitial/interstitial.service';
const dayjs = require('dayjs');
import { SettingsService } from './settings.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';

// private router: Router, private auth: AuthService, private interstitial: InterstitialService

describe('SettingsService', () => {
  let service: SettingsService;
  let disputeMock: any;
  let routerMock: any;
  let authMock: any;
  let transunionMock: any;
  let interstitialMock: any;
  beforeEach(() => {
    routerMock = jasmine.createSpyObj('Router', ['']);
    authMock = jasmine.createSpyObj('AuthService', ['deactivateAccount']);
    transunionMock = jasmine.createSpyObj('TransunionService', ['sendTransunionAPICall']);
    disputeMock = jasmine.createSpyObj('DisputeService', ['getDisputesByUser']);
    interstitialMock = jasmine.createSpyObj('InterstitialService', ['']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authMock },
        { provide: DisputeService, useValue: disputeMock },
        { provide: TransunionService, useValue: transunionMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    });
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Methods', () => {
    it(`DeactivateAccount should throw an error 'no disputes' when disputes response comes back failed`, async () => {
      const fail = { success: false, error: null, data: [] };
      disputeMock.getDisputesByUser.and.returnValue(fail);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('no disputes');
    });

    it(`DeactivateAccount should call handleDeactivation when disputes comes back success but data empty`, fakeAsync(() => {
      const success = { success: true, error: null, data: [] };
      disputeMock.getDisputesByUser.and.returnValue(success);
      const spy = spyOn(service, 'handleDeactivation');
      service.deactivateAccount();
      tick(1);
      expect(spy).toHaveBeenCalled();
    }));

    it(`DeactivateAccount should throw an error 'disputes confirmation failed' when disputes comes back success but data undefined`, async () => {
      const success = { success: true, error: null, data: undefined };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('disputes confirmation failed');
    });

    it(`DeactivateAccount should throw an error 'an open dispute' when disputes comes back success but data has open disputes`, async () => {
      const success = { success: true, error: null, data: [{ disputeStatus: 'openDispute' }] };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('an open dispute');
    });

    it(`DeactivateAccount should call handleDeactivation when disputes comes back success and data has NO open disputes and NO complete disputes`, fakeAsync(() => {
      const success = { success: true, error: null, data: [{ disputeStatus: 'cancelledDispute' }] };
      disputeMock.getDisputesByUser.and.returnValue(success);
      const spy = spyOn(service, 'handleDeactivation');
      service.deactivateAccount();
      tick(1);
      expect(spy).toHaveBeenCalled();
    }));

    it(`DeactivateAccount should call handleDeactivation when disputes comes back success and data has NO open disputes and complete disputes that are older than 30 days`, fakeAsync(() => {
      const thirtyOneDaysAgo = dayjs(new Date().toISOString()).add(-31, 'days');
      const success = {
        success: true,
        error: null,
        data: [{ disputeStatus: 'completeDispute', closedOn: thirtyOneDaysAgo.toISOString() }],
      };
      disputeMock.getDisputesByUser.and.returnValue(success);
      const spy = spyOn(service, 'handleDeactivation');
      service.deactivateAccount();
      tick(1);
      expect(spy).toHaveBeenCalled();
    }));

    it(`DeactivateAccount should throw and error 'younger than 30 days' when disputes comes back success and data has NO open disputes and complete disputes that are younger than 30 days`, async () => {
      const oneWeekAgo = dayjs(new Date().toISOString()).add(-7, 'days');
      const success = {
        success: true,
        error: null,
        data: [{ disputeStatus: 'completeDispute', closedOn: oneWeekAgo.toISOString() }],
      };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('younger than 30 days');
    });

    it('handleDeactivation should call auth.deactivateAccount if transunion api comes back success', fakeAsync(() => {
      transunionMock.sendTransunionAPICall.and.returnValue({ success: true, error: null, data: null });
      service.handleDeactivation();
      tick(1);
      expect(authMock.deactivateAccount).toHaveBeenCalled();
    }));

    it(`handleDeactivation should throw an error 'cancel enroll failed' if transunion api comes back failed`, async () => {
      transunionMock.sendTransunionAPICall.and.returnValue({ success: false, error: null, data: null });
      await expectAsync(service.handleDeactivation()).toBeRejectedWith('cancel enroll failed');
    });
  });
});
