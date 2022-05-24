import { EventKeys } from '@shared/services/broadcast/broadcast.model';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { Helper } from '@testing/test-helper';
import { of } from 'rxjs';

import { ForbearanceService } from './forbearance.service';

const setup = () => {
  let broadcastMock: any;
  let creditReportServiceMock: any;
  broadcastMock = jasmine.createSpyObj('BroadcastService', ['broadcast']);
  creditReportServiceMock = jasmine.createSpyObj('CreditreportService', ['getTradeLinePartitions', 'setTradeline'], {
    tuReport$: of({}),
  });

  const forbearanceService = new ForbearanceService(broadcastMock, creditReportServiceMock);
  return {
    forbearanceService,
    broadcastMock,
    creditReportServiceMock,
  };
};

describe('ForbearanceService', () => {
  let h: Helper<ForbearanceService>;
  let service: ForbearanceService;
  let broadcastMock: any;
  let reportServiceMock: any;

  beforeEach(() => {
    const { forbearanceService, broadcastMock: bMock, creditReportServiceMock: crMock } = setup();
    service = forbearanceService;
    broadcastMock = bMock;
    reportServiceMock = crMock;
    h = new Helper<ForbearanceService>(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Properties and Methods', () => {
    it('should have a property called "model"', () => {
      expect(h.hasProperty(service, 'model')).toEqual(true);
    });
    it('should have a property called "model$"', () => {
      expect(h.hasProperty(service, 'model$')).toEqual(true);
    });
    it('should have a property called "creditReportServiceSub$"', () => {
      expect(h.hasProperty(service, 'creditReportServiceSub$')).toEqual(true);
    });
    it('should have a method called "navigate"', () => {
      expect(h.hasMethod(service, 'navigate')).toEqual(true);
    });
  });

  describe('ngOnDestroy method', () => {
    it('should call creditReportServiceSub$.unsubscribe', () => {
      const spy = spyOn(service.creditReportServiceSub$, 'unsubscribe');
      service.ngOnDestroy();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('navigate method', () => {
    it('should call broadcastService.broadcast with route and navigation event', () => {
      const mockRoute = '/mytestroute';
      service.navigate(mockRoute);
      expect(broadcastMock.broadcast).toHaveBeenCalledWith(EventKeys.NAVIGATION, mockRoute);
    });
  });

  describe('setModel method', () => {
    it('should call creditReportService.getTradeLinePartitions', () => {
      service.setModel();
      expect(reportServiceMock.getTradeLinePartitions).toHaveBeenCalled();
    });
    it('should set the model to the tradelines returned from getTradeLinePartitions', () => {
      const mockTradelines = ['mockTradeline'];
      reportServiceMock.getTradeLinePartitions.and.returnValue(mockTradelines);
      service.setModel();
      expect(service.model).toEqual({ tradelines: mockTradelines } as any);
    });
    it('should call model$.next', () => {
      const mockTradelines = ['mockTradeline'];
      reportServiceMock.getTradeLinePartitions.and.returnValue(mockTradelines);
      const spy = spyOn(service.model$, 'next');
      service.setModel();
      expect(spy).toHaveBeenCalledWith({ tradelines: mockTradelines } as any);
    });
  });

  describe('onViewDetail method', () => {
    it('should call set tradelines', () => {
      const mock = { mock: 'mymock' } as any;
      service.onViewDetail(mock);
      expect(reportServiceMock.setTradeline).toHaveBeenCalledWith(mock);
    });
    it('should call navigate with the tradeline route', () => {
      const route = routes.root.dashboard.report.tradeline.full;
      const spy = spyOn(service, 'navigate');
      service.onViewDetail({} as any);
      expect(spy).toHaveBeenCalledWith(route);
    });
  });
});
