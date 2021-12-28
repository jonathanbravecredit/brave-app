import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { Helper } from '@testing/index';
import { CreditreportService } from './creditreport.service';
import { AgenciesStateModel } from '@store/agencies/agencies.model';
import { of, Subscription } from 'rxjs';
import { TransunionInput } from '@shared/services/aws/api.service';
import { NgxsModule, Store } from '@ngxs/store';

//private statesvc: StateService, private transunion: TransunionService

describe('CreditreportService', () => {
  let service: CreditreportService;
  let stateMock: any;
  let transunionMock: any;
  let h: Helper<CreditreportService>;
  let store: Store;
  let storeSpy: any;

  beforeEach(() => {
    stateMock = jasmine.createSpyObj('StateService', ['updateAgenciesAsync', 'updateAgencies'], ['state']);
    transunionMock = jasmine.createSpyObj('TransunionService', ['refreshCreditReport']);
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [
        { provide: StateService, useValue: stateMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    });
    service = TestBed.inject(CreditreportService);
    Object.defineProperty(service, 'agencies$', { writable: true });
    service.agencies$ = of({} as AgenciesStateModel);
    service.subscribeToAgencies();
    // store = TestBed.inject(Store);
    h = new Helper(service);
    // storeSpy = spyOn(store, 'select');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Service constructor', () => {
    it('Should assign agenciesSub$ on constructor', () => {
      const test = service.agenciesSub$ instanceof Subscription;
      expect(test).toBeTrue();
    });
    it('Should NOT set the tuAgency property and equal default when the agency tu state is empty', (done: () => void) => {
      const tuMock = {} as TransunionInput;
      const agencyMock = {
        transunion: tuMock,
      };
      service.agencies$ = of(agencyMock);
      service.subscribeToAgencies();
      service.agencies$.subscribe({
        next: () => {
          console.log('in next service', service.tuAgency);
          const test = service.tuAgency !== undefined && Object.keys(service.tuAgency).length === 0;
          expect(test).toBeTrue();
          done();
        },
      });
    });
    it('Should set the tuAgency property when the agency tu state is NOT empty', (done: () => void) => {
      const tuMock = { authenticated: true } as TransunionInput;
      const agencyMock = {
        transunion: tuMock,
      };
      service.agencies$ = of(agencyMock);
      service.subscribeToAgencies();
      service.agencies$.subscribe({
        next: () => {
          console.log('in next service', service.tuAgency);
          const test = service.tuAgency.authenticated;
          expect(test).toBeTrue();
          done();
        },
      });
    });
  });

  describe('Method calls', () => {
    it('Should call transunion refreshCreditReport when refreshCreditReport service method is called', () => {
      service.refreshCreditReport();
      expect(transunionMock.refreshCreditReport).toHaveBeenCalled();
    });

    it('Get Transunion should return a blank object when transunion data is not populated on agencies', () => {
      const tu = { transunion: null } as AgenciesStateModel;
      const test = service.getTransunion(tu);
      expect(test).toEqual({});
    });

    it('Get Transunion should return transunion data when populated on agencies', () => {
      const tu = { transunion: { authenticated: true } } as AgenciesStateModel;
      const test = service.getTransunion(tu);
      expect(test.authenticated).toEqual(true);
    });
  });
});
