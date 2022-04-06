import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IBorrower, IMergeReport, IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { PreferencesStateModel } from '@store/preferences';
import { ICreditReportTradelinesCardGroup } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
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

  it('should run transunion.getCreditScores on init', () => {
    component.ngOnInit();

    expect(transunionMock.getCreditScores).toHaveBeenCalled();
  });

  it('should run store.dispatch when onHide is run', () => {
    const testData = { showAllAccounts: {} };
    creditReportServiceMock.tuPreferences = testData;

    component.onHide({} as ICreditReportTradelinesCardGroup);

    expect(storeMock.dispatch).toHaveBeenCalled();
  });

  it('should run creditReportService.setTradeline when onViewDetailClick is run', () => {
    component.onViewDetailClick({} as ITradeLinePartition);

    expect(creditReportServiceMock.setTradeline).toHaveBeenCalled();
  });

  it('should run creditReportService.setPublicItem when onViewDetailClick is run', () => {
    component.onViewPublicItemDetailClick({} as IPublicPartition);

    expect(creditReportServiceMock.setPublicItem).toHaveBeenCalled();
  });

  it('should run creditReportService.setPersonalItem when onViewDetailClick is run', () => {
    component.onViewPersonalItemDetailClick({} as IBorrower);

    expect(creditReportServiceMock.setPersonalItem).toHaveBeenCalled();
  });

  it('should run router.navigate when onViewDetailClick is run', () => {
    component.onViewDetailClick({} as ITradeLinePartition);

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run router.navigate when onViewPublicItemDetailClick is run', () => {
    component.onViewPublicItemDetailClick({} as IPublicPartition);

    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('should run router.navigate when onViewPersonalItemDetailClick is run', () => {
    component.onViewPersonalItemDetailClick({} as IBorrower);

    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
