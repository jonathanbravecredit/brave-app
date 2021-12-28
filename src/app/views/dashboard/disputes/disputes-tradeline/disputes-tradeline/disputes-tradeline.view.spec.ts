import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
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
    routerMock = jasmine.createSpyObj('Router', ['']);
    interstitialMock = jasmine.createSpyObj('InterstitialService', ['']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['clearDisputes', 'pushDispute', 'sendStartDispute']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['']);

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
});
