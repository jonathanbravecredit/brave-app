import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import {
  MOCK_AGENCIES_ACK_ACTION,
  MOCK_AGENCIES_ACK_MODEL,
  MOCK_AGENCIES_AUTH_ACTION,
  MOCK_AGENCIES_EDITTRANS_ACTION,
  MOCK_AGENCIES_EDIT_ACTION,
  MOCK_AGENCIES_INCRAUTH_ACTION,
  MOCK_AGENCIES_INCRPINATTMPT_ACTION,
  MOCK_AGENCIES_INCRPIN_ACTION,
  MOCK_AGENCIES_INITKBA_ACTION,
  MOCK_AGENCIES_INITPIN_ACTION,
  MOCK_AGENCIES_MODEL,
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
    dispatchSpy = spyOn(service, 'dispatch');
    dispatchAsyncSpy = spyOn(service, 'dispatchAsync');
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
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_APPDATA_EDIT_ACTION);
      expect(res).toEqual({ ...res, isLoaded: true });
    });

    it('should call service.dispatch on updateStateDBSync', () => {
      service.updateStateDBSync(MOCK_APPDATA_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_APPDATA_EDIT_ACTION);
    });

    it('should call service.dispatch on updateUserAttributes', () => {
      service.updateUserAttributes(MOCK_USER_ATTS_MODEL);
      expect(dispatchSpy).toHaveBeenCalled();
    });

    it('should call service.dispatchAsync on updateUserAttributesAsync', async () => {
      service.updateUserAttributesAsync(MOCK_USER_ATTS_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_USER_ATTS_MODEL, true);
    });

    it('should call service.dispatch on updateAgencies', () => {
      service.updateAgencies(MOCK_AGENCIES_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDIT_ACTION, true);
    });

    it('should call service.dispatchAsync on updateAgenciesAsync', async () => {
      await service.updateAgenciesAsync(MOCK_AGENCIES_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDIT_ACTION, true);
    });

    it('should call store.selectOnce on getTransunion', () => {
      storeMock.selectOnce.and.returnValue(of());
      service.getTransunion();
      expect(storeMock.selectOnce).toHaveBeenCalled();
    });

    it('should call service.dispatchAsync on updateTransunion', async () => {
      await service.updateTransunion(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatch on updateIndicativeEnrichment', () => {
      service.updateIndicativeEnrichment(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatchAsync on updateIndicativeEnrichmentAsync', async () => {
      await service.updateIndicativeEnrichmentAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatch on updateGetAuthenticationQuestions', () => {
      service.updateGetAuthenticationQuestions(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatchAsync on updateGetAuthenticationQuestionsAsync', async () => {
      await service.updateGetAuthenticationQuestionsAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatch on updateTransunionQuestions', () => {
      service.updateTransunionQuestions(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatchAsync on updateTransunionQuestionsAsync', async () => {
      await service.updateTransunionQuestionsAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatch on updateTransunionQuestions', () => {
      service.updateTransunionQuestions(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatchAsync on updateTransunionQuestionsAsync', async () => {
      await service.updateTransunionQuestionsAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatch on updateTransunionAuthDetails', () => {
      service.updateTransunionAuthDetails(MOCK_TUPARTIAL_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
    });

    it('should call service.dispatchAsync on updateTransunionAuthDetailsAsync', async () => {
      await service.updateTransunionAuthDetailsAsync(MOCK_TUPARTIAL_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_EDITTRANS_ACTION);
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
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTCOMP_ACTION);
    });

    it('should call service.dispatchAsync on updateLastCompleteAsync', async () => {
      await service.updateLastCompleteAsync(MOCK_ONBOARDING_LASTCOMP_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTCOMP_ACTION);
    });

    it('should call service.dispatchAsync on updateAuthenticatedOnAsync', async () => {
      await service.updateAuthenticatedOnAsync(true, '1970-01-01');
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_AGENCIES_AUTH_ACTION);
    });

    it('should call service.dispatch on updateLastActive', () => {
      service.updateLastActive(MOCK_ONBOARDING_LASTACT_MODEL);
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTACT_ACTION);
    });

    it('should call service.dispatchAsync on updateLastActiveAsync', async () => {
      await service.updateLastActiveAsync(MOCK_ONBOARDING_LASTACT_MODEL);
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_LASTACT_ACTION);
    });

    it('should call service.dispatch on updateAbandonedStatus', () => {
      service.updateAbandonedStatus();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_ABAND_ACTION);
    });

    it('should call service.dispatchAsync on updateAbandonedStatusAsync', async () => {
      await service.updateAbandonedStatusAsync();
      expect(dispatchAsyncSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_ABAND_ACTION);
    });

    it('should call service.dispatch on resetOnboarding', () => {
      service.resetOnboarding();
      expect(dispatchSpy).toHaveBeenCalledWith(MOCK_ONBOARDING_RESET_ACTION);
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
      service.dispatch<any>('action', true);
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
});
