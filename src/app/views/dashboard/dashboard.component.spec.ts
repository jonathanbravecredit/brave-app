import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { of } from 'rxjs';

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
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['isCreditFreezeEnabled']);
    routeMock = jasmine.createSpyObj('ActivatedRoute', [''], {data: of()});
    routerMock = jasmine.createSpyObj('Router', ['navigate'], {events: of()});
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
});
