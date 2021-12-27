import { TestBed, tick } from '@angular/core/testing';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { Helper } from '@testing/index';
import { CreditreportService } from './creditreport.service';
import { AgenciesStateModel } from '@store/agencies/agencies.model';
import { of, Subscription } from 'rxjs';
import { TransunionInput } from '@shared/services/aws/api.service';

//private statesvc: StateService, private transunion: TransunionService

describe('CreditreportService', () => {
  let service: CreditreportService;
  let stateMock: any;
  let transunionMock: any;
  let h: Helper<CreditreportService>;

  beforeEach(() => {
    stateMock = jasmine.createSpyObj('StateService', ['updateAgenciesAsync', 'updateAgencies'], ['state']);
    transunionMock = jasmine.createSpyObj('TransunionService', ['refreshCreditReport']);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useValue: stateMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    });
    service = TestBed.inject(CreditreportService);
    h = new Helper(service);
    // Object.defineProperty(service, 'agencies$', { writable: true });
    // Object.defineProperty(service, 'preferences$', { writable: true });
    // service.subscribeToAgencies();
    // service.subscribeToPreferences();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Service constructor', () => {
    it('Should assign agenciesSub$ on constructor', () => {
      const test = service.agenciesSub$ instanceof Subscription;
      expect(test).toBeTrue();
    });
    it('Should NOT set the tuAgency property when the agency tu state is empty', () => {
      const tuMock = {} as TransunionInput;
      const agencyMock = {
        transunion: tuMock,
      };
      service.agencies$ = of(agencyMock);
      tick();
      const test = service.tuAgency === undefined;
      expect(test).toBeTrue();
    });
    it('Should set the tuAgency property when the agency tu state is NOT empty', (done) => {
      const tuMock = { authenticated: true } as TransunionInput;
      const agencyMock = {
        transunion: tuMock,
      };
      service.agencies$ = of(agencyMock);
      tick();
      const test = service.tuAgency !== undefined;
      expect(test).toBeTrue();
    });
  });

  describe('Method calls', () => {
    it('Should call transunion refreshCreditReport when refreshCreditReport service method is called', () => {
      service.refreshCreditReport();
      expect(transunionMock.refreshCreditReport).toHaveBeenCalled();
    });

    it('Get Transunion should return a blank object when transunion data is not populated on agencies', () => {
      const tu = { agencies: { transunion: null } } as AgenciesStateModel;
      const test = service.getTransunion(tu);
      expect(test).toEqual({});
    });

    it('Get Transunion should return transunion data when populated on agencies', () => {
      const tu = { agencies: { transunion: { authenticated: true } } } as AgenciesStateModel;
      const test = service.getTransunion(tu);
      expect(test.authenticated).toEqual(true);
    });
  });
});
