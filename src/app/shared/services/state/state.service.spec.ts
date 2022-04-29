import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { Store } from '@ngxs/store';
import {
  MOCK_AGENCIES_ACK_ACTION,
  MOCK_AGENCIES_ACK_MODEL,
  MOCK_AGENCIES_AUTHQUEST_ACTION,
  MOCK_AGENCIES_AUTH_ACTION,
  MOCK_AGENCIES_EDITTRANS_ACTION,
  // MOCK_AGENCIES_EDITTRANS_ACTION,
  MOCK_AGENCIES_EDIT_ACTION,
  MOCK_AGENCIES_INCRAUTH_ACTION,
  MOCK_AGENCIES_INCRPINATTMPT_ACTION,
  MOCK_AGENCIES_INCRPIN_ACTION,
  MOCK_AGENCIES_INDENRICH_ACTION,
  MOCK_AGENCIES_INITKBA_ACTION,
  MOCK_AGENCIES_INITPIN_ACTION,
  MOCK_AGENCIES_MODEL,
  MOCK_AGENCIES_TRANSAUTH_ACTION,
  MOCK_AGENCIES_TRANSQUEST_ACTION,
  MOCK_APPDATA_EDIT_ACTION,
  MOCK_APPDATA_MODEL,
  MOCK_ONBOARDING_ABAND_ACTION,
  MOCK_ONBOARDING_LASTACT_ACTION,
  MOCK_ONBOARDING_LASTACT_MODEL,
  MOCK_ONBOARDING_LASTCOMP_ACTION,
  MOCK_ONBOARDING_LASTCOMP_MODEL,
  MOCK_ONBOARDING_RESET_ACTION,
  MOCK_TUPARTIAL_MODEL,
  MOCK_USER_ATTS_MODEL,
  MOCK_USER_UPDATEATTR_ACTION,
} from '@testing/__mocks__/state.mocks';
import { of } from 'rxjs';
import { APIService } from '../aws/api.service';
import { StateService } from './state.service';

const setup = () => {
  const apiMock = jasmine.createSpyObj('ApiService', ['UpdateAppData']);
  const storeMock = jasmine.createSpyObj('Store', ['subscribe', 'dispatch', 'selectOnce']);
  const service = new StateService(apiMock, storeMock);
  return { service, apiMock, storeMock };
};

describe('StateService', () => {
  const { service, apiMock, storeMock } = setup();
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('State actions', () => {
    let dispatchSpy: jasmine.Spy;
    let dispatchAsyncSpy: jasmine.Spy;
    beforeAll(() => {
      dispatchSpy = spyOn(service, 'dispatch');
      dispatchAsyncSpy = spyOn(service, 'dispatchAsync');
    });
    beforeEach(() => {
      dispatchSpy.calls.reset();
      dispatchAsyncSpy.calls.reset();
      storeMock.dispatch.and.returnValue(of({}));
    });
    it('should call service.dispatchAsync on updateStateNoDBSyncAsync', async () => {
      const res = await service.updateStateNoDBSyncAsync(MOCK_APPDATA_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_APPDATA_EDIT_ACTION);
      expect(res).toEqual({ ...res, isLoaded: true });
    });

    it('should call service.dispatchAsync on updateStateDBSyncAsync', async () => {
      const res = await service.updateStateDBSyncAsync(MOCK_APPDATA_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_APPDATA_EDIT_ACTION, true);
      expect(res).toEqual({ ...res, isLoaded: true });
    });

    it('should call service.dispatch on updateStateDBSync', () => {
      service.updateStateDBSync(MOCK_APPDATA_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_APPDATA_EDIT_ACTION, true);
    });

    it('should call service.dispatch on updateUserAttributes', () => {
      service.updateUserAttributes(MOCK_USER_ATTS_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_USER_UPDATEATTR_ACTION, true);
    });

    it('should call service.dispatchAsync on updateUserAttributesAsync', async () => {
      service.updateUserAttributesAsync(MOCK_USER_ATTS_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_USER_UPDATEATTR_ACTION, true);
    });

    it('should call service.dispatch on updateAgencies', () => {
      service.updateAgencies(MOCK_AGENCIES_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDIT_ACTION, true);
    });

    it('should call service.dispatchAsync on updateAgenciesAsync', async () => {
      await service.updateAgenciesAsync(MOCK_AGENCIES_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDIT_ACTION, true);
    });

    it('should call store.selectOnce on getTransunion', () => {
      storeMock.selectOnce.and.returnValue(of());
      service.getTransunion();
      expect(storeMock.selectOnce).toHaveBeenCalled();
    });

    it('should call service.dispatchAsync on updateTransunion', async () => {
      await service.updateTransunion(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatch on updateIndicativeEnrichment', () => {
      service.updateIndicativeEnrichment(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INDENRICH_ACTION);
    });

    it('should call service.dispatchAsync on updateIndicativeEnrichmentAsync', async () => {
      await service.updateIndicativeEnrichmentAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INDENRICH_ACTION);
    });

    it('should call service.dispatch on updateGetAuthenticationQuestions', () => {
      service.updateGetAuthenticationQuestions(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_AUTHQUEST_ACTION);
    });

    it('should call service.dispatchAsync on updateGetAuthenticationQuestionsAsync', async () => {
      await service.updateGetAuthenticationQuestionsAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_AUTHQUEST_ACTION);
    });

    it('should call service.dispatch on updateTransunionQuestions', () => {
      const { currentRawQuestions } = MOCK_TUPARTIAL_MODEL;
      service.updateTransunionQuestions(currentRawQuestions);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_TRANSQUEST_ACTION);
    });

    it('should call service.dispatchAsync on updateTransunionQuestionsAsync', async () => {
      const { currentRawQuestions } = MOCK_TUPARTIAL_MODEL;
      await service.updateTransunionQuestionsAsync(currentRawQuestions);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_TRANSQUEST_ACTION);
    });

    it('should call service.dispatch on updateTransunionAuthDetails', () => {
      const { currentRawAuthDetails } = MOCK_TUPARTIAL_MODEL;
      service.updateTransunionAuthDetails(currentRawAuthDetails);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_TRANSAUTH_ACTION);
    });

    it('should call service.dispatchAsync on updateTransunionAuthDetailsAsync', async () => {
      const { currentRawAuthDetails } = MOCK_TUPARTIAL_MODEL;
      await service.updateTransunionAuthDetailsAsync(currentRawAuthDetails);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_TRANSAUTH_ACTION);
    });

    it('should call service.dispatch on updateAcknowledgeDisputeTerms', () => {
      service.updateAcknowledgeDisputeTerms(MOCK_AGENCIES_ACK_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_ACK_ACTION);
    });

    it('should call service.dispatchAsync on updateAcknowledgeDisputeTermsAsync', async () => {
      await service.updateAcknowledgeDisputeTermsAsync(MOCK_AGENCIES_ACK_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_ACK_ACTION);
    });

    it('should call service.dispatch on incrementAuthAttempts', () => {
      service.incrementAuthAttempts();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INCRAUTH_ACTION);
    });

    it('should call service.dispatchAsync on incrementAuthAttemptsAsync', async () => {
      await service.incrementAuthAttemptsAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INCRAUTH_ACTION);
    });

    it('should call service.dispatch on initiateTransunionPinDetails', () => {
      service.initiateTransunionPinDetails();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INITPIN_ACTION);
    });

    it('should call service.dispatchAsync on initiateTransunionPinDetailsAsync', async () => {
      await service.initiateTransunionPinDetailsAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INITPIN_ACTION);
    });

    it('should call service.dispatch on incrementTransunionPinRequest', () => {
      service.incrementTransunionPinRequest();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INCRPIN_ACTION);
    });

    it('should call service.dispatchAsync on incrementTransunionPinRequestAsync', async () => {
      await service.incrementTransunionPinRequestAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INCRPIN_ACTION);
    });

    it('should call service.dispatch on incrementTransunionPinAttempts', () => {
      service.incrementTransunionPinAttempts();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INCRPINATTMPT_ACTION);
    });

    it('should call service.dispatchAsync on incrementTransunionPinAttemptsAsync', async () => {
      await service.incrementTransunionPinAttemptsAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INCRPINATTMPT_ACTION);
    });

    it('should call service.dispatch on initiateKBADetails', () => {
      service.initiateKBADetails();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INITKBA_ACTION);
    });

    it('should call service.dispatchAsync on initiateKBADetailsAsync', async () => {
      await service.initiateKBADetailsAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_INITKBA_ACTION);
    });

    it('should call service.dispatch on updateLastComplete', () => {
      service.updateLastComplete(MOCK_ONBOARDING_LASTCOMP_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTCOMP_ACTION, true);
    });

    it('should call service.dispatchAsync on updateLastCompleteAsync', async () => {
      await service.updateLastCompleteAsync(MOCK_ONBOARDING_LASTCOMP_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTCOMP_ACTION, true);
    });

    it('should call service.dispatchAsync on updateAuthenticatedOnAsync', async () => {
      await service.updateAuthenticatedOnAsync(true, '1970-01-01');
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_AUTH_ACTION, true);
    });

    it('should call service.dispatch on updateLastActive', () => {
      service.updateLastActive(MOCK_ONBOARDING_LASTACT_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTACT_ACTION, true);
    });

    it('should call service.dispatchAsync on updateLastActiveAsync', async () => {
      await service.updateLastActiveAsync(MOCK_ONBOARDING_LASTACT_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTACT_ACTION, true);
    });

    it('should call service.dispatch on updateAbandonedStatus', () => {
      service.updateAbandonedStatus();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_ABAND_ACTION, true);
    });

    it('should call service.dispatchAsync on updateAbandonedStatusAsync', async () => {
      await service.updateAbandonedStatusAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_ABAND_ACTION, true);
    });

    it('should call service.dispatch on resetOnboarding', () => {
      service.resetOnboarding();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_RESET_ACTION, true);
    });
  });

  describe('dispatch', () => {
    beforeEach(() => {
      storeMock.dispatch.and.returnValue(of({}));
    });
    it('should call store.dispatch whether sync or not', () => {
      service.dispatch<any>('action');
      expect(storeMock.dispatch).toHaveBeenCalledWith('action');
    });
    it('should call service.scrubAndUpdate if sync set to true', fakeAsync(() => {
      const spy = spyOn(service, 'scrubAndUpdate');
      service.dispatch<any>('action', true);
      tick(1);
      expect(spy).toHaveBeenCalled();
    }));
    it('should NOT call service.scrubAndUpdate if sync is set to false', fakeAsync(() => {
      const spy = spyOn(service, 'scrubAndUpdate');
      service.dispatch<any>('action', false);
      tick(1);
      expect(spy).not.toHaveBeenCalled();
    }));
  });

  describe('dispatchAsync', () => {
    beforeEach(() => {
      storeMock.dispatch.and.returnValue(of({}));
    });
    it('should call store.dispatch', async () => {
      await service.dispatchAsync<any>('action');
      expect(storeMock.dispatch).toHaveBeenCalledWith('action');
    });
  });

  describe('scrub', () => {
    it('should call TransunionUti.scrubbers.scrubBackendData', () => {
      const spy = spyOn(TransunionUtil.scrubbers, 'scrubBackendData');
      service.scrub({ appData: { data: 'scrub' } } as any);
      expect(spy).toHaveBeenCalledWith({ data: 'scrub' });
    });
  });

  describe('update', () => {
    it('should call api.UpdateAppData', () => {
      service.update('input' as any);
      expect(apiMock.UpdateAppData).toHaveBeenCalledWith('input');
    });
  });

  describe('scrubAndUpdate', () => {
    it('should call service.scrub and service.update', () => {
      const arg = 'state' as any;
      const val = 'clean' as any;
      const spy1 = spyOn(service, 'scrub').and.returnValue(val);
      const spy2 = spyOn(service, 'update');
      service.scrubAndUpdate(arg);
      expect(spy1).toHaveBeenCalledWith(arg);
      expect(spy2).toHaveBeenCalledWith(val);
    });
  });
});
