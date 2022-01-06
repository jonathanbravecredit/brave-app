import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { AuthService } from '../auth/auth.service';
import { InterstitialService } from '../interstitial/interstitial.service';
import * as moment from 'moment';
import { SettingsService } from './settings.service';

// private router: Router, private auth: AuthService, private interstitial: InterstitialService

describe('SettingsService', () => {
  let service: SettingsService;
  let disputeMock: any;
  let routerMock: any;
  let authMock: any;
  let interstitialMock: any;
  beforeEach(() => {
    routerMock = jasmine.createSpyObj('Router', ['']);
    authMock = jasmine.createSpyObj('AuthService', ['deactivateAccount']);
    disputeMock = jasmine.createSpyObj('DisputeService', ['getDisputesByUser']);
    interstitialMock = jasmine.createSpyObj('InterstitialService', ['']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authMock },
        { provide: DisputeService, useValue: disputeMock },
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

    it(`DeactivateAccount should throw an error 'no disputes' when disputes comes back success but data empty`, async () => {
      const success = { success: true, error: null, data: [] };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('no disputes');
    });

    it(`DeactivateAccount should throw an error 'no disputes' when disputes comes back success but data undefined`, async () => {
      const success = { success: true, error: null, data: undefined };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('no disputes');
    });

    it(`DeactivateAccount should throw an error 'an open dispute' when disputes comes back success but data has open disputes`, async () => {
      const success = { success: true, error: null, data: [{ disputeStatus: 'openDispute' }] };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('an open dispute');
    });

    it(`DeactivateAccount should call auth.deactivateAccount when disputes comes back success and data has NO open disputes and NO complete disputes`, fakeAsync(() => {
      const success = { success: true, error: null, data: [{ disputeStatus: 'cancelledDispute' }] };
      disputeMock.getDisputesByUser.and.returnValue(success);
      service.deactivateAccount();
      tick(1);
      expect(authMock.deactivateAccount).toHaveBeenCalled();
    }));

    it(`DeactivateAccount should call auth.deactivateAccount when disputes comes back success and data has NO open disputes and complete disputes that are older than 30 days`, fakeAsync(() => {
      const thirtyOneDaysAgo = moment(new Date().toISOString()).add(-31, 'days');
      const success = {
        success: true,
        error: null,
        data: [{ disputeStatus: 'completeDispute', closedOn: thirtyOneDaysAgo.toISOString() }],
      };
      disputeMock.getDisputesByUser.and.returnValue(success);
      service.deactivateAccount();
      tick(1);
      expect(authMock.deactivateAccount).toHaveBeenCalled();
    }));

    it(`DeactivateAccount should throw and error 'younger than 30 days' when disputes comes back success and data has NO open disputes and complete disputes that are younger than 30 days`, async () => {
      const oneWeekAgo = moment(new Date().toISOString()).add(-7, 'days');
      const success = {
        success: true,
        error: null,
        data: [{ disputeStatus: 'completeDispute', closedOn: oneWeekAgo.toISOString() }],
      };
      disputeMock.getDisputesByUser.and.returnValue(success);
      await expectAsync(service.deactivateAccount()).toBeRejectedWith('younger than 30 days');
    });
  });
});
