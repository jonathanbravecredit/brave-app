import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IPublicPartition } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { BehaviorSubject, of } from 'rxjs';

import { PublicitemsView } from './publicitems.view';

describe('PublicitemsView', () => {
  let component: PublicitemsView;
  let fixture: ComponentFixture<PublicitemsView>;
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

    //props
    creditReportServicesMock.tuPublicItem$ = new BehaviorSubject<IPublicPartition>({} as IPublicPartition);
    await TestBed.configureTestingModule({
      declarations: [PublicitemsView],
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
    fixture = TestBed.createComponent(PublicitemsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
