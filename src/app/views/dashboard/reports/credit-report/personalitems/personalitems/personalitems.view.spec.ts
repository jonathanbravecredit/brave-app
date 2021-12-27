import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IBorrower } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { BehaviorSubject, of } from 'rxjs';

import { PersonalitemsView } from './personalitems.view';

// private router: Router,
// private route: ActivatedRoute,
// private statesvc: StateService,
// private disputeService: DisputeService,
// private creditReportServices: CreditreportService,

describe('PersonalitemsView', () => {
  let component: PersonalitemsView;
  let fixture: ComponentFixture<PersonalitemsView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let statesvcMock: any;
  let disputeServiceMock: any;
  let creditReportServicesMock: any;

  beforeEach(async () => {
    // methods
    routerMock = jasmine.createSpyObj('Router', ['']);
    statesvcMock = jasmine.createSpyObj('StateService', ['']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['']);
    creditReportServicesMock = jasmine.createSpyObj('CreditreportService', ['']);

    // props
    creditReportServicesMock.tuPersonalItem$ = new BehaviorSubject<IBorrower>({} as IBorrower);
    await TestBed.configureTestingModule({
      declarations: [PersonalitemsView],
      imports: [SharedPipesModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: CreditreportService, useValue: creditReportServicesMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitemsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
