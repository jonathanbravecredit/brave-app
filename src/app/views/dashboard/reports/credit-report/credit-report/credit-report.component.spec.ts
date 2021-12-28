import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { PreferencesStateModel } from '@store/preferences';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { CreditReportComponent } from './credit-report.component';

// private creditReportService: CreditreportService,
// private store: Store,
// private router: Router,
// private route: ActivatedRoute,
// private analytics: AnalyticsService,
// private transunion: TransunionService,

describe('CreditReportComponent', () => {
  let component: CreditReportComponent;
  let fixture: ComponentFixture<CreditReportComponent>;
  let creditReportServiceMock: any;
  let storeMock: any;
  let routerMock: any;
  let routeMock: any;
  let analyticsMock: any;
  let transunionMock: any;

  beforeEach(async () => {
    // methods
    creditReportServiceMock = jasmine.createSpyObj('CreditreportService', [
      'setTradeline',
      'setPublicItem',
      'setPersonalItem',
    ]);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    routeMock = jasmine.createSpyObj('ActivatedRoute', ['']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['']);
    transunionMock = jasmine.createSpyObj('TransunionService', ['getCreditScores']);

    // returns
    transunionMock.getCreditScores.and.returnValue(of({ data: null }).toPromise());
    // props
    creditReportServiceMock.tuReport$ = new BehaviorSubject<IMergeReport>({} as IMergeReport);
    creditReportServiceMock.preferences$ = new Observable<PreferencesStateModel>();
    await TestBed.configureTestingModule({
      declarations: [CreditReportComponent],
      providers: [
        { provide: CreditreportService, useValue: creditReportServiceMock },
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
