import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { BehaviorSubject, Observable, of, Subscriber, Subscription } from 'rxjs';

import { DashboardComponent } from './dashboard.component';

// private dashboardService: DashboardService,
// private creditReportService: CreditreportService,
// private router: Router,
// private route: ActivatedRoute,

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardServiceMock: any;
  let routeMock: any;
  let routerMock: any;

  beforeEach(async () => {
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['isCreditFreezeEnabled'], {
      dashSnapshots$: new BehaviorSubject<DashboardStateModel | null>(null),
      dashTrends$: new BehaviorSubject<IGetTrendingData | null>(null),
      dashScores$: new BehaviorSubject<IProductTrendingData[] | null>(null),
      dashReferral$: new BehaviorSubject<IReferral | null>(null),
    });
    routeMock = jasmine.createSpyObj('ActivatedRoute', [''], {
      data: of({
        dashboard: {
          snapshots: {},
          trends: {},
          referral: {},
        },
      }),
    });
    routerMock = jasmine.createSpyObj('Router', ['navigate'], { events: of() });
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run navigate on goToLink', () => {
    component.goToLink('');
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run route.data.subscibe on subscribeToRouteData', () => {
    let spy = spyOn(routeMock.data, 'subscribe');
    component.subscribeToRouteData();
    expect(spy).toHaveBeenCalled();
  });

  it('should run dashSnapshots$.next on subscribeToRouteData', fakeAsync(() => {
    spyOn(dashboardServiceMock.dashSnapshots$, 'next');
    component.subscribeToRouteData();
    expect(dashboardServiceMock.dashSnapshots$.next).toHaveBeenCalled();
  }));

  it('should run dashTrends$.next on subscribeToRouteData', fakeAsync(() => {
    spyOn(dashboardServiceMock.dashTrends$, 'next');
    component.subscribeToRouteData();
    expect(dashboardServiceMock.dashTrends$.next).toHaveBeenCalled();
  }));

  it('should run dashScores$.next on subscribeToRouteData', fakeAsync(() => {
    spyOn(dashboardServiceMock.dashScores$, 'next');
    component.subscribeToRouteData();
    expect(dashboardServiceMock.dashScores$.next).toHaveBeenCalled();
  }));

  it('should run dashReferral$.next on subscribeToRouteData', fakeAsync(() => {
    spyOn(dashboardServiceMock.dashReferral$, 'next');
    component.subscribeToRouteData();
    expect(dashboardServiceMock.dashReferral$.next).toHaveBeenCalled();
  }));

  it('should run routeSub$?.unsubscribe on ngOnDestroy', fakeAsync(() => {
    component.routeSub$ = new Subscription()
    spyOn(component.routeSub$, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.routeSub$.unsubscribe).toHaveBeenCalled();
  }));
});
