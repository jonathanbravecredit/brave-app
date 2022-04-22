import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TransunionInput, TUStatusRefInput, UserAttributesInput } from '@bravecredit/brave-sdk';
import { Store } from '@ngxs/store';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { of } from 'rxjs';
import { APIService } from '../aws/api.service';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;
  let apiMock: any;
  let storeMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj('ApiService', ['UpdateAppData']);
    storeMock = jasmine.createSpyObj('Store', ['subscribe', 'dispatch', 'selectOnce']);
    TestBed.configureTestingModule({
      providers: [
        { provide: APIService, useValue: apiMock },
        { provide: Store, useValue: storeMock },
      ],
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call store.dispatch on updateStateNoDBSyncAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateStateNoDBSyncAsync({} as AppDataStateModel)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateStateDBSyncAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateStateDBSyncAsync({} as AppDataStateModel)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateStateDBSyncAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateStateDBSyncAsync({} as AppDataStateModel)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateStateDBSync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateStateDBSync({} as AppDataStateModel)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateUserAttributes', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateUserAttributes({} as UserAttributesInput)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateUserAttributesAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateUserAttributesAsync({} as UserAttributesInput)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementActionAsync', fakeAsync(() => {
    let classMock = class ClassMock {}
    storeMock.dispatch.and.returnValue(of())
    service.incrementActionAsync(classMock)
    tick()
    expect(storeMock.dispatch).toHaveBeenCalled()
  }))

  it('should call store.dispatch on updateAgencies', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAgencies({} as AgenciesStateModel)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateAgenciesAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAgenciesAsync({} as AgenciesStateModel)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.selectOnce on getTransunion', () => {
    storeMock.selectOnce.and.returnValue(of())
    service.getTransunion()
    expect(storeMock.selectOnce).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateTransunion', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateTransunion({} as Partial<TransunionInput>)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateIndicativeEnrichment', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateIndicativeEnrichment({indicativeEnrichmentSuccess: true, indicativeEnrichmentStatus: {} as TUStatusRefInput})
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateIndicativeEnrichmentAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateIndicativeEnrichmentAsync({indicativeEnrichmentSuccess: true, indicativeEnrichmentStatus: {} as TUStatusRefInput})
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateGetAuthenticationQuestions', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateGetAuthenticationQuestions({
      getAuthenticationQuestionsSuccess: true, 
      getAuthenticationQuestionsStatus: {} as TUStatusRefInput,
      serviceBundleFulfillmentKey: ''
    })
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateGetAuthenticationQuestionsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateGetAuthenticationQuestionsAsync({
      getAuthenticationQuestionsSuccess: true, 
      getAuthenticationQuestionsStatus: {} as TUStatusRefInput,
      serviceBundleFulfillmentKey: ''
    })
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateTransunionQuestions', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateTransunionQuestions('')
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateTransunionQuestionsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateTransunionQuestionsAsync('')
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateTransunionAuthDetails', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateTransunionAuthDetails('')
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateTransunionAuthDetailsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateTransunionAuthDetailsAsync('')
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateAcknowledgeDisputeTerms', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAcknowledgeDisputeTerms({
      acknowledgedDisputeTerms: true, 
      acknowledgedDisputeTermsOn: ''
    })
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateAcknowledgeDisputeTermsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAcknowledgeDisputeTermsAsync({
      acknowledgedDisputeTerms: true, 
      acknowledgedDisputeTermsOn: ''
    })
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementAuthAttempts', () => {
    storeMock.dispatch.and.returnValue(of())
    service.incrementAuthAttempts()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementAuthAttemptsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.incrementAuthAttemptsAsync()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on initiateTransunionPinDetails', () => {
    storeMock.dispatch.and.returnValue(of())
    service.initiateTransunionPinDetails()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on initiateTransunionPinDetailsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.initiateTransunionPinDetailsAsync()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementTransunionPinRequest', () => {
    storeMock.dispatch.and.returnValue(of())
    service.incrementTransunionPinRequest()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementTransunionPinRequestAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.incrementTransunionPinRequestAsync()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementTransunionPinAttempts', () => {
    storeMock.dispatch.and.returnValue(of())
    service.incrementTransunionPinAttempts()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on incrementTransunionPinAttemptsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.incrementTransunionPinAttemptsAsync()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on initiateKBADetails', () => {
    storeMock.dispatch.and.returnValue(of())
    service.initiateKBADetails()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on initiateKBADetailsAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.initiateKBADetailsAsync()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateLastComplete', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateLastComplete(1)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateLastCompleteAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateLastCompleteAsync(1)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateAuthenticatedOnAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAuthenticatedOnAsync(true, '')
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateLastActive', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateLastActive(1)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateAbandonedStatus', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAbandonedStatus()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateAbandonedStatusAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateAbandonedStatusAsync()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on resetOnboarding', () => {
    storeMock.dispatch.and.returnValue(of())
    service.resetOnboarding()
    expect(storeMock.dispatch).toHaveBeenCalled()
  })

  it('should call store.dispatch on updateLastActiveAsync', () => {
    storeMock.dispatch.and.returnValue(of())
    service.updateLastActiveAsync(1)
    expect(storeMock.dispatch).toHaveBeenCalled()
  })
});
