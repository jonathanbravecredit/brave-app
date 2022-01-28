import { fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { IPublicPartition, ISubscriber, ITradeLinePartition } from '@shared/interfaces';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { MonitorClickEvents } from '@shared/services/safeListMonitoring/constants';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { AppDataStateModel } from '@store/app-data';
import { of, Subscription } from 'rxjs';
import { DisputeService } from './dispute.service';

const setup = () => {
  const transunionMock = jasmine.createSpyObj('TransunionService', [
    'sendDisputePreflightCheck',
    'sendStartDispute',
    'getInvestigationResultsById',
    'getCreditBureauResultsById',
    'sendTransunionAPICall',
  ]);
  const safeMonitorMock = jasmine.createSpyObj('SafeListMonitoringService', ['fireClickEvent']);
  const analyticsMock = jasmine.createSpyObj('AnalyticsService', ['fireClickEvent']);
  const stateMock = jasmine.createSpyObj('StateService', ['updateAgenciesAsync', 'updateAgencies'], {
    state$: of(),
    state: { appData: new AppDataStateModel() },
  });
  const disputeService = new DisputeService(stateMock, analyticsMock, transunionMock, safeMonitorMock);

  // const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
  // const stubValue = 'stub value';
  // const masterService = new MasterService(valueServiceSpy);

  // valueServiceSpy.getValue.and.returnValue(stubValue);
  return { disputeService, transunionMock, safeMonitorMock, analyticsMock, stateMock };
};

describe('DisputeService', () => {
  let service: DisputeService;
  let stateMock: any;
  let transunionMock: any;
  let safeMonitorMock: any;
  let analyticsMock: any;

  // beforeEach(() => {
  //   transunionMock = jasmine.createSpyObj('TransunionService', ['subscribe']);
  //   safeMonitorMock = jasmine.createSpyObj('SafeListMonitoringService', ['fireClickEvent']);
  //   analyticsMock = jasmine.createSpyObj('AnalyticsService', ['fireClickEvent']);
  //   stateMock = jasmine.createSpyObj('StateService', ['updateAgenciesAsync', 'updateAgencies'], {
  //     state$: of(),
  //     state: { appData: new AppDataStateModel() },
  //   });
  //   TestBed.configureTestingModule({
  //     providers: [
  //       DisputeService,
  //       { provide: StateService, useClass: stateMock },
  //       { provide: TransunionService, useValue: transunionMock },
  //       { provide: AnalyticsService, useValue: analyticsMock },
  //       { provide: SafeListMonitoringService, useValue: safeMonitorMock },
  //     ],
  //   });
  //   service = TestBed.inject(DisputeService);
  // });

  it('should be created', () => {
    const { disputeService } = setup();
    expect(disputeService).toBeTruthy();
  });

  describe('Service constructor', () => {
    it('Should assign tradelineSub$ on constructor', () => {
      const { disputeService } = setup();
      const test = disputeService.tradelineSub$ instanceof Subscription;
      expect(test).toBeTrue();
    });

    it('Should assign publicItemSub$ on constructor', () => {
      const { disputeService } = setup();
      const test = disputeService.publicItemSub$ instanceof Subscription;
      expect(test).toBeTrue();
    });

    it('Should assign personalItemSub$ on constructor', () => {
      const { disputeService } = setup();
      const test = disputeService.personalItemSub$ instanceof Subscription;
      expect(test).toBeTrue();
    });

    it('Should assign stateSub$ on constructor', () => {
      const { disputeService } = setup();
      const test = disputeService.stateSub$ instanceof Subscription;
      expect(test).toBeTrue();
    });

    it('Should call subscribeToTradeline on constructor', () => {
      spyOn(DisputeService.prototype, 'subscribeToTradeline');
      setup();
      expect(DisputeService.prototype.subscribeToTradeline).toHaveBeenCalled();
    });

    it('Should call subscribeToPublicItems on constructor', () => {
      spyOn(DisputeService.prototype, 'subscribeToPublicItems');
      setup();
      expect(DisputeService.prototype.subscribeToPublicItems).toHaveBeenCalled();
    });

    it('Should call subscribeToPersonalItems on constructor', () => {
      spyOn(DisputeService.prototype, 'subscribeToPersonalItems');
      setup();
      expect(DisputeService.prototype.subscribeToPersonalItems).toHaveBeenCalled();
    });

    it('Should call subscribeToState on constructor', () => {
      spyOn(DisputeService.prototype, 'subscribeToState');
      setup();
      expect(DisputeService.prototype.subscribeToState).toHaveBeenCalled();
    });

    it('Should call subscribeToCurrentDispute on constructor', () => {
      spyOn(DisputeService.prototype, 'subscribeToCurrentDispute');
      setup();
      expect(DisputeService.prototype.subscribeToCurrentDispute).toHaveBeenCalled();
    });
  });

  describe('Getters and Setters', () => {
    it('Getter acknowledged should return TRUE when set to TRUE', () => {
      const { disputeService } = setup();
      disputeService.acknowledged = true;
      expect(disputeService.acknowledged).toBeTrue();
      expect(disputeService._acknowledged).toBeTrue();
    });

    it('Getter acknowledged should return FALSE when set to FALSE', () => {
      const { disputeService } = setup();
      disputeService.acknowledged = false;
      expect(disputeService.acknowledged).toBeFalse();
    });

    it('Getter acknowledged should return TRUE when set to TRUE', () => {
      const { disputeService } = setup();
      disputeService.acknowledged = true;
      expect(disputeService.acknowledged).toBeTrue();
    });

    it('Getter state should return an instance of an AppDataStateModel when set', () => {
      const { disputeService } = setup();
      disputeService.state = new AppDataStateModel();
      const t1 = disputeService.state instanceof AppDataStateModel;
      const t2 = disputeService._state instanceof AppDataStateModel;
      expect(t1).toBeTrue();
      expect(t2).toBeTrue();
    });
  });

  describe('Subscribe methods', () => {
    it('Method subscribeToTradeline should call tradeline$.subscribe()', () => {
      const { disputeService } = setup();
      spyOn(disputeService.tradeline$, 'subscribe');
      disputeService.subscribeToTradeline();
      expect(disputeService.tradeline$.subscribe).toHaveBeenCalled();
    });
    it('Method subscribeToPublicItems should call publicItem$.subscribe()', () => {
      const { disputeService } = setup();
      spyOn(disputeService.publicItem$, 'subscribe');
      disputeService.subscribeToPublicItems();
      expect(disputeService.publicItem$.subscribe).toHaveBeenCalled();
    });
    it('Method subscribeToPersonalItems should call personalItem$.subscribe()', () => {
      const { disputeService } = setup();
      spyOn(disputeService.personalItem$, 'subscribe');
      disputeService.subscribeToPersonalItems();
      expect(disputeService.personalItem$.subscribe).toHaveBeenCalled();
    });
    it('Method subscribeToState should call state$.subscribe()', () => {
      const { disputeService, stateMock } = setup();
      spyOn(stateMock.state$, 'subscribe');
      disputeService.subscribeToState();
      expect(stateMock.state$.subscribe).toHaveBeenCalled();
    });
    it('Method subscribeToCurrentDispute should call currentDispute$.subscribe()', () => {
      const { disputeService } = setup();
      spyOn(disputeService.currentDispute$, 'subscribe');
      disputeService.subscribeToCurrentDispute();
      expect(disputeService.currentDispute$.subscribe).toHaveBeenCalled();
    });
  });

  describe('Angular lifecycle methods', () => {
    it('On ngOnDestroy should call tradelineSub$.unsubscribe if tradelineSub$ is not undefined', () => {
      const { disputeService } = setup();
      spyOn(disputeService.tradelineSub$!, 'unsubscribe');
      disputeService.ngOnDestroy();
      expect(disputeService.tradelineSub$?.unsubscribe).toHaveBeenCalled();
    });

    it('On ngOnDestroy should call publicItemSub$.unsubscribe if publicItemSub$ is not undefined', () => {
      const { disputeService } = setup();
      spyOn(disputeService.publicItemSub$!, 'unsubscribe');
      disputeService.ngOnDestroy();
      expect(disputeService.publicItemSub$!.unsubscribe).toHaveBeenCalled();
    });

    it('On ngOnDestroy should call personalItemSub$.unsubscribe if personalItemSub$ is not undefined', () => {
      const { disputeService } = setup();
      spyOn(disputeService.personalItemSub$!, 'unsubscribe');
      disputeService.ngOnDestroy();
      expect(disputeService.personalItemSub$!.unsubscribe).toHaveBeenCalled();
    });

    it('On ngOnDestroy should call stateSub$.unsubscribe if stateSub$ is not undefined', () => {
      const { disputeService } = setup();
      spyOn(disputeService.stateSub$!, 'unsubscribe');
      disputeService.ngOnDestroy();
      expect(disputeService.stateSub$!.unsubscribe).toHaveBeenCalled();
    });

    it('On ngOnDestroy should call currentDisputeSub$.unsubscribe if currentDisputeSub$ is not undefined', () => {
      const { disputeService } = setup();
      spyOn(disputeService.currentDisputeSub$!, 'unsubscribe');
      disputeService.ngOnDestroy();
      expect(disputeService.currentDisputeSub$!.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('Service methods', () => {
    it('getCurrentDispute should call currentDispute$.getValue', () => {
      const { disputeService } = setup();
      spyOn(disputeService.currentDispute$, 'getValue');
      disputeService.getCurrentDispute();
      expect(disputeService.currentDispute$.getValue).toHaveBeenCalled();
    });

    it('getUserStateOfResidence should return the empty string when no value on the state is accessible', () => {
      const { disputeService } = setup();
      const value = disputeService.getUserStateOfResidence();
      expect(value).toEqual('');
    });

    describe('setTradelineItem method', () => {
      it('Should call tradeline$.next', () => {
        const { disputeService } = setup();
        spyOn(disputeService.tradeline$, 'next');
        disputeService.setTradelineItem({} as ITradeLinePartition);
        expect(disputeService.tradeline$.next).toHaveBeenCalled();
      });
      it('Should call getTradelineSubscriberByKey on TU Util', () => {
        const { disputeService } = setup();
        const tu = TransunionUtil;
        spyOn(tu.queries.report, 'getTradelineSubscriberByKey');
        disputeService.setTradelineItem({} as ITradeLinePartition);
        expect(tu.queries.report.getTradelineSubscriberByKey).toHaveBeenCalled();
      });
      it('tuTradelineSubscriber should be defined if getTradelineSubscriberByKey find subscriber and tuPublicItemSubscriber$.next SHOULD be called', () => {
        const { disputeService } = setup();
        const tu = TransunionUtil;
        spyOn(disputeService.tuTradelineSubscriber$, 'next');
        disputeService.setTradelineItem({} as ITradeLinePartition);
        const sub = tu.queries.report.getTradelineSubscriberByKey({} as ITradeLinePartition) || ({} as ISubscriber);
        const t1 = sub instanceof Object;
        const t2 = disputeService.tuTradelineSubscriber instanceof Object;
        expect(t1).toBeTrue();
        expect(t2).toBeTrue();
        expect(disputeService.tuTradelineSubscriber$.next).toHaveBeenCalledWith(sub);
      });
    });

    describe('setPublicItem method', () => {
      it('Should call publicItem$.next', () => {
        const { disputeService } = setup();
        spyOn(disputeService.publicItem$, 'next');
        disputeService.setPublicItem({} as IPublicPartition);
        expect(disputeService.publicItem$.next).toHaveBeenCalled();
      });
      it('Should call getPublicSubscriberByKey on TU Util', () => {
        const { disputeService } = setup();
        const tu = TransunionUtil;
        spyOn(tu.queries.report, 'getPublicSubscriberByKey');
        disputeService.setPublicItem({} as IPublicPartition);
        expect(tu.queries.report.getPublicSubscriberByKey).toHaveBeenCalled();
      });
      it('tuPublicItemSubscriber should be defined if getPublicSubscriberByKey find subscriber and tuPublicItemSubscriber$.next SHOULD be called', () => {
        const { disputeService } = setup();
        const tu = TransunionUtil;
        spyOn(disputeService.tuPublicItemSubscriber$, 'next');
        disputeService.setPublicItem({} as IPublicPartition);
        const sub = tu.queries.report.getPublicSubscriberByKey({} as IPublicPartition) || ({} as ISubscriber);
        const t1 = sub instanceof Object;
        const t2 = disputeService.tuPublicItemSubscriber instanceof Object;
        expect(t1).toBeTrue();
        expect(t2).toBeTrue();
        expect(disputeService.tuPublicItemSubscriber$.next).toHaveBeenCalledWith(sub);
      });
    });

    it('setPersonaItem should call personalItem$.next', () => {
      const { disputeService } = setup();
      spyOn(disputeService.personalItem$, 'next');
      disputeService.setPersonalItem({} as any);
      expect(disputeService.personalItem$.next).toHaveBeenCalledWith({} as any);
    });

    it('pushDispute should increase the length of disputeStack by 1', () => {
      const { disputeService } = setup();
      expect(disputeService.disputeStack.length).toEqual(0);
      disputeService.pushDispute({} as any);
      expect(disputeService.disputeStack.length).toEqual(1);
    });

    it('popDispute should decrease the length of the disputeStack by 1', () => {
      const { disputeService } = setup();
      disputeService.pushDispute({} as any);
      disputeService.pushDispute({} as any);
      expect(disputeService.disputeStack.length).toEqual(2);
      disputeService.popDispute();
      expect(disputeService.disputeStack.length).toEqual(1);
    });

    it('popDispute should call pop and return the popped item', () => {
      const { disputeService } = setup();
      disputeService.pushDispute('xyz' as any);
      const t1 = disputeService.popDispute();
      expect(t1).toEqual('xyz' as any);
    });

    it('clearDisputes should set the disputeStack to a length of 0', () => {
      const { disputeService } = setup();
      disputeService.clearDisputes();
      expect(disputeService.disputeStack.length).toEqual(0);
    });

    describe('onUserConfirmed', () => {
      it(`Should call acknowledgeDisputeTerms everytime`, () => {
        const { disputeService } = setup();
        spyOn(disputeService, 'acknowledgeDisputeTerms');
        disputeService.onUserConfirmed();
        expect(disputeService.acknowledgeDisputeTerms).toHaveBeenCalledWith(disputeService.state);
      });
      xit(`Should call sendDisputePreflightCheck`, () => {
        const { disputeService, transunionMock } = setup();
        spyOn(disputeService, 'sendDisputePreflightCheck');
        disputeService.state = {
          agencies: {
            transunion: {},
          },
        } as AppDataStateModel;
        transunionMock.sendDisputePreflightCheck.and.returnValue({ success: true });
        disputeService.onUserConfirmed();
        expect(disputeService.sendDisputePreflightCheck).toHaveBeenCalled();
      });
      xit(`Should call analytics fireClickEvent safeMonitor click events if preflight response is true`, () => {
        const { disputeService, transunionMock, analyticsMock, safeMonitorMock } = setup();
        transunionMock.sendDisputePreflightCheck.and.returnValue({ sucess: true });
        disputeService.onUserConfirmed();
        expect(analyticsMock.fireClickEvent).toHaveBeenCalledWith(AnalyticClickEvents.DisputeEnrollment, {
          google: true,
          mixpanel: true,
          brave: true,
        });
        expect(safeMonitorMock.fireClickEvent).toHaveBeenCalledWith(MonitorClickEvents.DisputesEnroll);
      });
    });

    it('sendDisputePreflightCheck should call transunion.sendDisputePreflightCheck', () => {
      const { disputeService, transunionMock } = setup();
      disputeService.sendDisputePreflightCheck();
      expect(transunionMock.sendDisputePreflightCheck).toHaveBeenCalled();
    });
    it('sendStartDispute should call transunion.sendStartDispute with dispute stack', () => {
      const { disputeService, transunionMock } = setup();
      disputeService.pushDispute('xyz' as any);
      disputeService.sendStartDispute();
      expect(transunionMock.sendStartDispute).toHaveBeenCalledWith(disputeService.disputeStack);
    });
    it('getInvestigationResultsById should call transunion.getInvestigationResultsById', () => {
      const { disputeService, transunionMock } = setup();
      disputeService.getInvestigationResultsById('abc');
      expect(transunionMock.getInvestigationResultsById).toHaveBeenCalledWith('abc');
    });
    it('getCreditBureauResultsById should call transunion.getCreditBureauResultsById', () => {
      const { disputeService, transunionMock } = setup();
      disputeService.getCreditBureauResultsById('abc');
      expect(transunionMock.getCreditBureauResultsById).toHaveBeenCalledWith('abc');
    });

    describe('getDisputeByUser method', () => {
      it('getDisputeByUser should call transunion.sendTransunionAPICall', () => {
        const { disputeService, transunionMock } = setup();
        const action = 'ListDisputesByUser';
        const message = JSON.stringify({});
        disputeService.getDisputesByUser();
        expect(transunionMock.sendTransunionAPICall).toHaveBeenCalledWith(action, message);
      });
      xit('getDisputeByUser should return a standard ITUServiceResponse with empty array when call transunion.sendTransunionAPICall throws error', async () => {
        const { disputeService, transunionMock } = setup();
        transunionMock.sendTransunionAPICall.and.callFake(() => {
          throw 'test error';
        });
        await expectAsync(disputeService.getDisputesByUser()).toBeRejectedWith({
          success: false,
          error: 'test error',
          data: [],
        });
      });
    });
  });
});
