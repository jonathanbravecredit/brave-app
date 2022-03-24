import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { StateService } from '@shared/services/state/state.service';
import { CreditReportStateModel } from '@store/credit-report';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { of } from 'rxjs';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DashboardSnapshotsResolver } from './dashboard-snapshots.resolver';
import { IBreachCard } from '@shared/interfaces/breach-card.interface';

describe('DashboardSnapshotsResolver', () => {
  let resolver: DashboardSnapshotsResolver;
  let storeMock: any;
  let stateMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['selectOnce', 'dispatch']);
    stateMock = jasmine.createSpyObj('StateService', ['updateStateDBSync']);
    storeMock.dispatch.and.returnValue(of({ appData: {} }));
    storeMock.selectOnce.and.returnValue(of({ report: {}, isLoaded: true, isFresh: true }));
    stateMock.updateStateDBSync.and.returnValue(null);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: StateService, useValue: stateMock },
      ],
    });
    resolver = TestBed.inject(DashboardSnapshotsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  describe('resolve method', () => {
    it('should call store selectOnce 2 times', async () => {
      await resolver.resolve();
      expect(storeMock.selectOnce).toHaveBeenCalledTimes(2);
    });
    it('should populate creditReport property with a mock report', async () => {
      const mockValue = { report: {} } as unknown as CreditReportStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      await resolver.resolve();
      expect(resolver.creditReport).toEqual(mockValue);
    });
    it('should populate creditReport property with a mock report', async () => {
      const mockValue = { isLoaded: true, isFresh: true } as unknown as DashboardStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      await resolver.resolve();
      expect(resolver.dashboard).toEqual(mockValue);
    });
    it('should return a null value if no report returned', async () => {
      const mockValue = {} as unknown as CreditReportStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      const res = await resolver.resolve();
      expect(res).toBeNull();
    });
    it('should call processDataAndSync when isLoaded is FALSE', async () => {
      const mockValue = { report: {}, isLoaded: false, isFresh: true } as unknown as DashboardStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      const spy = spyOn(resolver, 'processDataAndSync');
      await resolver.resolve();
      expect(spy).toHaveBeenCalled();
    });
    it('should call processDataAndSync when isFresh is FALSE', async () => {
      const mockValue = { report: {}, isLoaded: true, isFresh: false } as unknown as DashboardStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      const spy = spyOn(resolver, 'processDataAndSync');
      await resolver.resolve();
      expect(spy).toHaveBeenCalled();
    });
    it('should NOT call processDataAndSync when isFresh is TRUE and isLoaded is TRUE', async () => {
      const mockValue = { report: {}, isLoaded: true, isFresh: true } as unknown as DashboardStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      const spy = spyOn(resolver, 'processDataAndSync');
      await resolver.resolve();
      expect(spy).not.toHaveBeenCalled();
    });
    it('should return the dashboard when isFresh is TRUE and isLoaded is TRUE', async () => {
      const mockValue = { report: {}, isLoaded: true, isFresh: true } as unknown as DashboardStateModel;
      storeMock.selectOnce.and.returnValue(of(mockValue));
      const res = await resolver.resolve();
      expect(res).toEqual(mockValue);
    });
  });

  describe('processDataAndSync method', () => {
    let mockReport: IMergeReport;
    beforeEach(() => {
      mockReport = {} as IMergeReport;
    });
    it('should call flagTradelines', () => {
      const spy = spyOn(resolver, 'flagTradelines');
      resolver.processDataAndSync(mockReport);
      expect(spy).toHaveBeenCalledWith([]);
    });
    it('should call flagDatabreaches', () => {
      const spy = spyOn(resolver, 'flagDatabreaches');
      resolver.processDataAndSync(mockReport);
      expect(spy).toHaveBeenCalledWith(mockReport);
    });
    it('should call dispatch 3 times', () => {
      resolver.processDataAndSync(mockReport);
      expect(storeMock.dispatch).toHaveBeenCalledTimes(3);
    });
    it('should call updateStateDBSync twice', () => {
      resolver.processDataAndSync(mockReport);
      expect(stateMock.updateStateDBSync).toHaveBeenCalled();
    });
    it('should call selectOnce', async () => {
      await resolver.processDataAndSync(mockReport);
      expect(storeMock.selectOnce).toHaveBeenCalled();
    });
  });

  describe('flagDatabreaches method', () => {
    it('should call dispatch when breaches are identified', () => {
      const dummy = {} as IBreachCard;
      spyOn(tu.queries.report, 'listDataBreaches').and.returnValue([dummy, dummy]);
      resolver.flagDatabreaches({} as IMergeReport);
      expect(storeMock.dispatch).toHaveBeenCalled();
    });
    it('should NOT call dispatch when breaches are not identified', () => {
      spyOn(tu.queries.report, 'listDataBreaches').and.returnValue([]);
      resolver.flagDatabreaches({} as IMergeReport);
      expect(storeMock.dispatch).not.toHaveBeenCalled();
    });
  });

  describe('flagTradelines method', () => {
    let tradelines: ITradeLinePartition[];
    beforeEach(() => {
      tradelines = [0, 1] as unknown as ITradeLinePartition[];
    });
    it('should call handleNegative when tradelines are present', () => {
      const spy = spyOn(resolver, 'handleNegative');
      resolver.flagTradelines(tradelines);
      expect(spy).toHaveBeenCalled();
    });
    it('should call handleForbearance when tradelines are present', () => {
      const spy = spyOn(resolver, 'handleForbearance');
      resolver.flagTradelines(tradelines);
      expect(spy).toHaveBeenCalled();
    });
    describe('set the flags correctly', () => {
      it('should call dispatch 2 times when both flags are true', () => {
        spyOn(resolver, 'handleNegative').and.returnValue(true);
        spyOn(resolver, 'handleForbearance').and.returnValue(true);
        resolver.flagTradelines(tradelines);
        expect(storeMock.dispatch).toHaveBeenCalledTimes(2);
      });
      it('should call dispatch 1 time when one flag is false', () => {
        spyOn(resolver, 'handleNegative').and.returnValue(false);
        spyOn(resolver, 'handleForbearance').and.returnValue(true);
        resolver.flagTradelines(tradelines);
        expect(storeMock.dispatch).toHaveBeenCalledTimes(1);
      });
      it('should call dispatch 0 time when both flags are false', () => {
        spyOn(resolver, 'handleNegative').and.returnValue(false);
        spyOn(resolver, 'handleForbearance').and.returnValue(false);
        resolver.flagTradelines(tradelines);
        expect(storeMock.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('handleNegative method', () => {
    let tradelines: ITradeLinePartition[];
    beforeEach(() => {
      tradelines = [0, 1] as unknown as ITradeLinePartition[];
    });
    it('should call dispatch if isNegativeAccount', () => {
      spyOn(tu.queries.report, 'isNegativeAccount').and.returnValue(true);
      resolver.handleNegative(tradelines[0]);
      expect(storeMock.dispatch).toHaveBeenCalled();
    });
    it('should NOT call dispatch if NOT isNegativeAccount', () => {
      spyOn(tu.queries.report, 'isNegativeAccount').and.returnValue(false);
      resolver.handleNegative(tradelines[0]);
      expect(storeMock.dispatch).not.toHaveBeenCalled();
    });
    it('should return isNegativeAccount result', () => {
      spyOn(tu.queries.report, 'isNegativeAccount').and.returnValue(false);
      const res = resolver.handleNegative(tradelines[0]);
      expect(res).toBeFalse();
    });
  });

  describe('handleForbearance method', () => {
    let tradelines: ITradeLinePartition[];
    beforeEach(() => {
      tradelines = [0, 1] as unknown as ITradeLinePartition[];
    });
    it('should return isForbearanceAccount result', () => {
      spyOn(tu.queries.report, 'isForbearanceAccount').and.returnValue(false);
      const res = resolver.handleForbearance(tradelines[0]);
      expect(res).toBeFalse();
    });
  });
});
