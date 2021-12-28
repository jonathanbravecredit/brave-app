import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { BehaviorSubject, of } from 'rxjs';

import { ForbearanceView } from './forbearance.view';

// private router: Router,
// private route: ActivatedRoute,
// private creditReportService: CreditreportService,

describe('ForbearanceView', () => {
  let component: ForbearanceView;
  let fixture: ComponentFixture<ForbearanceView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let creditReportServiceMock: any;

  beforeEach(async () => {
    //methods
    routerMock = jasmine.createSpyObj('Router', ['']);
    creditReportServiceMock = jasmine.createSpyObj('APIService', ['']);

    //props
    creditReportServiceMock.tuReport$ = new BehaviorSubject<IMergeReport>({} as IMergeReport);

    await TestBed.configureTestingModule({
      declarations: [ForbearanceView],
      imports: [SharedPipesModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: CreditreportService, useValue: creditReportServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
