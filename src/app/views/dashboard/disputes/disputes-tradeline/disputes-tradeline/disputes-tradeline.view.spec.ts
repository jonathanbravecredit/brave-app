import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { IDisputeProcessResult } from '@views/dashboard/disputes/components/dispute-base/interfaces';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { BehaviorSubject, of } from 'rxjs';

import { DisputesTradelineView } from './disputes-tradeline.view';

describe('DisputesTradelineView', () => {
  let component: DisputesTradelineView;
  let fixture: ComponentFixture<DisputesTradelineView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let interstitialMock: any;
  let disputeServiceMock: any;
  let analyticsMock: any;

  beforeEach(async () => {
    // build out methods
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    interstitialMock = jasmine.createSpyObj('InterstitialService', ['']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['clearDisputes', 'pushDispute', 'sendStartDispute']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['fireClickEvent']);

    // build out props
    disputeServiceMock.tradeline$ = new BehaviorSubject<ITradeLinePartition>({} as ITradeLinePartition);

    await TestBed.configureTestingModule({
      declarations: [DisputesTradelineView],
      imports: [SharedPipesModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: AnalyticsService, useValue: analyticsMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesTradelineView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clearDisputes when ngOnDestroy is called', () => {
    component.ngOnDestroy();

    expect(disputeServiceMock.clearDisputes).toHaveBeenCalled();
  });

  it('should run pushDispute when onProcessResult is called', () => {
    component.onProcessResult({
      result: { isFinished: false } as IDisputeProcessResult,
      tradeline: {},
    } as IProcessDisputeTradelineResult);

    expect(disputeServiceMock.pushDispute).toHaveBeenCalled();
  });

  it('should run sendStartDispute when onProcessResult is called and result.isFinished is truthy', () => {
    component.onProcessResult({
      result: { isFinished: true } as IDisputeProcessResult,
      tradeline: {},
    } as IProcessDisputeTradelineResult);

    expect(disputeServiceMock.sendStartDispute).toHaveBeenCalled();
  });

  it('should run fireClickEvent when onProcessResult is called ,result.isFinished is truthy and success is true', fakeAsync(() => {
    disputeServiceMock.sendStartDispute.and.returnValue({ success: true, error: false, data: {} });

    component.onProcessResult({
      result: { isFinished: true } as IDisputeProcessResult,
      tradeline: {},
    } as IProcessDisputeTradelineResult);

    tick();

    expect(analyticsMock.fireClickEvent).toHaveBeenCalled();
  }));

  it('should set viewDisplay to sent when onProcessResult is called ,result.isFinished is truthy and success is true', fakeAsync(() => {
    disputeServiceMock.sendStartDispute.and.returnValue({ success: true, error: false, data: {} });

    component.onProcessResult({
      result: { isFinished: true } as IDisputeProcessResult,
      tradeline: {},
    } as IProcessDisputeTradelineResult);

    tick();

    expect(component.viewDisplay).toEqual('sent');
  }));

  it('should run router.navigate to sent when onProcessResult is called ,result.isFinished is truthy and success is false', fakeAsync(() => {
    disputeServiceMock.sendStartDispute.and.returnValue({ success: false, error: { Code: '123' }, data: {} });

    component.onProcessResult({
      result: { isFinished: true } as IDisputeProcessResult,
      tradeline: {},
    } as IProcessDisputeTradelineResult);

    tick()

    expect(routerMock.navigate).toHaveBeenCalled();
  }));
});
