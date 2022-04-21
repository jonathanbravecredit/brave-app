import { TestBed } from '@angular/core/testing';
import { AddressInput, IVerifyAuthenticationAnswer, NameInput, SsnInput, UpdateAppDataInput, UserInput } from '@bravecredit/brave-sdk';
import { IIndicativeEnrichmentMsg } from '@shared/interfaces';
import { APIService, DobInput } from '@shared/services/aws/api.service';
import { SafeListMonitoringService } from '@shared/services/safeListMonitoring/safe-list-monitoring.service';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

import { TransunionService } from './transunion.service';

//private api: APIService, private safeListMonitoringService: SafeListMonitoringService

describe('TransunionService', () => {
  let service: TransunionService;
  let apiMock: any;
  let safeListMonitoringMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj('APIService', ['Transunion']);
    safeListMonitoringMock = jasmine.createSpyObj('SafeListMonitoringService', ['fireClickEvent']);
    TestBed.configureTestingModule({
      providers: [
        { provide: APIService, useValue: apiMock },
        { provide: SafeListMonitoringService, useValue: safeListMonitoringMock },
      ],
    });
    service = TestBed.inject(TransunionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run api.Transunion in sendTransunionAPICall', () => {
    service.sendTransunionAPICall('', '')
    expect(apiMock.Transunion).toHaveBeenCalled()
  })

  it('should run createIndicativeEnrichmentPayload in sendIndicativeEnrichment', () => {
    spyOn(service, 'createIndicativeEnrichmentPayload')
    service.sendIndicativeEnrichment({user: {}} as UpdateAppDataInput)
    expect(service.createIndicativeEnrichmentPayload).toHaveBeenCalled()
  })

  it('should run api.Transunion in sendIndicativeEnrichment', () => {
    service.sendIndicativeEnrichment({user: {}} as UpdateAppDataInput)
    expect(apiMock.Transunion).toHaveBeenCalled()
  })

  it('should run createGetAuthenticationQuestionsPayload in sendGetAuthenticationQuestions', () => {
    spyOn(service, 'createGetAuthenticationQuestionsPayload')
    service.sendGetAuthenticationQuestions({} as UpdateAppDataInput, '1')
    expect(service.createGetAuthenticationQuestionsPayload).toHaveBeenCalled()
  })

  it('should run api.Transunion in sendGetAuthenticationQuestions', () => {
    service.sendGetAuthenticationQuestions({} as UpdateAppDataInput, '1')
    expect(apiMock.Transunion).toHaveBeenCalled()
  })

  it('should run createVerifyAuthenticationQuestionsPayload in sendVerifyAuthenticationQuestions', () => {
    spyOn(service, 'createVerifyAuthenticationQuestionsPayload')
    service.sendVerifyAuthenticationQuestions({} as UpdateAppDataInput, [{} as IVerifyAuthenticationAnswer])
    expect(service.createVerifyAuthenticationQuestionsPayload).toHaveBeenCalled()
  })

  it('should run api.Transunion in sendVerifyAuthenticationQuestions', () => {
    service.sendVerifyAuthenticationQuestions({} as UpdateAppDataInput, [{} as IVerifyAuthenticationAnswer])
    expect(apiMock.Transunion).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in sendCompleteOnboarding', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.sendCompleteOnboarding()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in sendEnrollRequest', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.sendEnrollRequest()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in sendEnrollDisputesRequest', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.sendEnrollDisputesRequest()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run fireClickEvent in sendEnrollDisputesRequest', () => {
    service.sendEnrollDisputesRequest()
    expect(safeListMonitoringMock.fireClickEvent).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getCreditReport', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getCreditReport()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getCreditScores', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getCreditScores()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in sendDisputePreflightCheck', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.sendDisputePreflightCheck()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getDisputeStatus', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getDisputeStatus()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getTrendingData', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getTrendingData('')
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in sendStartDispute', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.sendStartDispute([{} as IProcessDisputeTradelineResult])
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getInvestigationResults', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getInvestigationResults('')
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getInvestigationResultsById', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getInvestigationResultsById('')
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getCreditBureauResultsById', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getCreditBureauResultsById('')
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in listAllDisputesByUser', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.listAllDisputesByUser()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should run sendTransunionAPICall in getCurrentDisputeByUser', () => {
    spyOn(service, 'sendTransunionAPICall')
    service.getCurrentDisputeByUser()
    expect(service.sendTransunionAPICall).toHaveBeenCalled()
  })

  it('should return expected data from createIndicativeEnrichmentPayload', () => {
    let dobObj = {} as DobInput
    let ssnObj = {} as SsnInput
    let nameObj = {} as NameInput
    let addressObj = {} as AddressInput
    let res = service.createIndicativeEnrichmentPayload({user: {userAttributes: { dob: dobObj, ssn: ssnObj, name: nameObj, address: addressObj,}} as UserInput}as UpdateAppDataInput)
    expect(res).toEqual({dob: dobObj,ssn: ssnObj, name:nameObj,address: addressObj}as IIndicativeEnrichmentMsg)
  })

  it('should return undefined if data is falsy in createIndicativeEnrichmentPayload', () => {  
    let res = service.createIndicativeEnrichmentPayload({user: {} as UserInput} as UpdateAppDataInput)
    expect(res).toBeUndefined()
  })
});
