import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { Helper } from '@testing/index';
import { CreditreportService } from './creditreport.service';
import { AgenciesStateModel } from '@store/agencies/agencies.model';
import { of, Subscription } from 'rxjs';
import { TransunionInput } from '@shared/services/aws/api.service';
import { NgxsModule, State, Store } from '@ngxs/store';
import { AppDataStateModel } from '@store/app-data';
import { Test } from '@shared/components/badges/percentage-badge/percentage-badge.stories';
import {
  IBorrower,
  IMergeReport,
  IPublicPartition,
  IPublicRecord,
  ISubscriber,
  ITradeline,
  ITradeLinePartition,
} from '@shared/interfaces';

//private statesvc: StateService, private transunion: TransunionService

describe('CreditreportService', () => {
  let service: CreditreportService;
  let stateMock: any;
  let transunionMock: any;
  let h: Helper<CreditreportService>;
  let store: Store;
  let storeSpy: any;
  class PartitionMockClass implements ITradeLinePartition {}

  beforeEach(() => {
    stateMock = jasmine.createSpyObj('StateService', ['updateAgenciesAsync', 'updateAgencies'], {
      state: { appData: new AppDataStateModel() },
    });
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
          const test = service.tuAgency.authenticated;
          expect(test).toBeTrue();
          done();
        },
      });
    });
    it('Should NOT set the tuReport property when the agency tu state is empty', (done: () => void) => {
      const tuMock = {} as TransunionInput;
      const agencyMock = {
        transunion: tuMock,
      };
      service.agencies$ = of(agencyMock);
      service.subscribeToAgencies();
      service.agencies$.subscribe({
        next: () => {
          const test = service.tuReport !== undefined && Object.keys(service.tuReport).length === 0;
          expect(test).toBeTrue();
          done();
        },
      });
    });
    it('Should set the tuReport property when the agency tu state is NOT empty', (done: () => void) => {
      const tuMock = {
        fulfillMergeReport: { serviceProductObject: '{ "TrueLinkCreditReportType": {} }' },
      } as TransunionInput;
      const agencyMock = {
        transunion: tuMock,
      };
      service.agencies$ = of(agencyMock);
      service.subscribeToAgencies();
      service.agencies$.subscribe({
        next: () => {
          const test = service.tuReport.TrueLinkCreditReportType !== undefined;
          expect(test).toBeTrue();
          done();
        },
      });
    });
  });

  describe('OnDestroy', () => {
    it('Should call agencisSub$.unsubscribe OnDestroy', () => {
      const unsubSpy = spyOn(service.agenciesSub$, 'unsubscribe');
      service.ngOnDestroy();
      expect(unsubSpy).toHaveBeenCalled();
    });
    it('Should call preferencesSub$.unsubscribe OnDestroy', () => {
      const unsubSpy = spyOn(service.preferencesSub$, 'unsubscribe');
      service.ngOnDestroy();
      expect(unsubSpy).toHaveBeenCalled();
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

    it('getStateSnapshot should return appData', () => {
      const state = service.getStateSnapshot();
      console.log('state ==> ', state);
      const test = state?.appData instanceof AppDataStateModel;
      expect(test).toBeTrue();
    });

    it('getTradeLinePartitions should return TradeLinePartition array of empty object if tuReport is empty', () => {
      service.tuReport = { TrueLinkCreditReportType: {} } as IMergeReport;
      const partitions = service.getTradeLinePartitions();
      const partition = partitions[0];
      const test = partition !== undefined && Object.keys(partition).length === 0;
      expect(test).toBeTrue();
    });

    it('getTradeLinePartitions should return TradeLinePartition array of partitions if tuReport is NOT empty', () => {
      service.tuReport = {
        TrueLinkCreditReportType: { TradeLinePartition: [{ accountTypeSymbol: 'tradeline' }] } as ITradeLinePartition,
      } as IMergeReport;
      const partitions = service.getTradeLinePartitions();
      expect(partitions[0].accountTypeSymbol).toEqual('tradeline');
    });

    it('setTradeline should update the tuTradeline property and tuTradelineSubscriber', () => {
      const subscriber: ISubscriber = { subscriberCode: '1', name: 'test' };
      const tradeline: ITradeLinePartition = { Tradeline: { subscriberCode: '1' } as ITradeline };
      service.tuReport = {
        TrueLinkCreditReportType: {
          Subscriber: subscriber,
        },
      } as IMergeReport;
      service.setTradeline(tradeline);

      const name = service.tuTradelineSubscriber?.name;
      const subscriberCode = service.tuTradeline?.Tradeline?.subscriberCode;
      expect(name).toEqual('test');
      expect(subscriberCode).toEqual('1');
    });

    it('getPublicItems should return PublicPartition array of partitions if tuReport is NOT empty', () => {
      service.tuReport = {
        TrueLinkCreditReportType: {
          PulblicRecordPartition: { PublicRecord: { subscriberCode: 'public' } },
        } as ITradeLinePartition,
      } as IMergeReport;
      const partitions = service.getPublicItems();
      const subscriberCode = partitions[0].PublicRecord?.subscriberCode;
      expect(subscriberCode).toEqual('public');
    });

    it('setPublicItem should update the tuPublicItem property and tuPublicItemSubscriber', () => {
      const subscriber: ISubscriber = { subscriberCode: '1', name: 'test' };
      const publicItem: IPublicPartition = { PublicRecord: { subscriberCode: '1' } as IPublicRecord };
      service.tuReport = {
        TrueLinkCreditReportType: {
          Subscriber: subscriber,
        },
      } as IMergeReport;
      service.setPublicItem(publicItem);

      const name = service.tuPublicItemSubscriber?.name;
      const subscriberCode = service.tuPublicItem?.PublicRecord?.subscriberCode;
      expect(name).toEqual('test');
      expect(subscriberCode).toEqual('1');
    });

    it('getPersonalItem should return Borrower partition if tuReport is NOT empty', () => {
      service.tuReport = {
        TrueLinkCreditReportType: { Borrower: { borrowerKey: 'borrower' } } as IBorrower,
      } as IMergeReport;
      const partitions = service.getPersonalItem();
      const borrowerKey = partitions.borrowerKey;
      expect(borrowerKey).toEqual('borrower');
    });

    it('setPersonalItem should update the tuPersonalItem property', () => {
      const personalItem: IBorrower = { borrowerKey: 'borrower' } as IBorrower;
      service.setPersonalItem(personalItem);
      const borrowerKey = service.tuPersonalItem?.borrowerKey;
      expect(borrowerKey).toEqual('borrower');
    });

    it('updateReport should call updateAgencies if updateReport is called with an agencies state model', () => {
      const agencies = {} as AgenciesStateModel;
      service.updateReport(agencies);
      expect(stateMock.updateAgencies).toHaveBeenCalled();
    });

    it('updateReport should NOT call updateAgencies if updateReport is called with a null agencies state model', () => {
      const agencies = null;
      service.updateReport(agencies);
      expect(stateMock.updateAgencies).not.toHaveBeenCalled();
    });

    it('updateReportAsync should call updateAgenciesAsync if updateReport is called with an agencies state model', fakeAsync(() => {
      const agencies = {} as AgenciesStateModel;
      service.updateReportAsync(agencies);
      tick(1);
      expect(stateMock.updateAgenciesAsync).toHaveBeenCalled();
    }));

    it('updateReportAsync should NOT call updateAgenciesAsync if updateReport is called with a null agencies state model', fakeAsync(() => {
      const agencies = null;
      service.updateReportAsync(agencies);
      tick(1);
      expect(stateMock.updateAgenciesAsync).not.toHaveBeenCalled();
    }));
  });
});
