import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { StateService } from '@shared/services/state/state.service';
import { BehaviorSubject, of } from 'rxjs';

import { DisputesReconfirmView } from './disputes-reconfirm.view';

// private router: Router,
// private route: ActivatedRoute,
// private disputeService: DisputeService,
// private statesvc: StateService,
// private creditReportService: CreditreportService,

describe('DisputesReconfirmView', () => {
  let component: DisputesReconfirmView;
  let fixture: ComponentFixture<DisputesReconfirmView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let interstitialMock: any;
  let disputeServiceMock: any;
  let statesvcMock: any;
  class CreditReportServiceMock {
    tuReport$ = new BehaviorSubject<IMergeReport>({} as IMergeReport);
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('', ['']);
    interstitialMock = jasmine.createSpyObj('', ['']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', [
      'setPersonalItem',
      'setPublicItem',
      'setTradelineItem',
    ]);
    statesvcMock = jasmine.createSpyObj('', ['']);
    await TestBed.configureTestingModule({
      declarations: [DisputesReconfirmView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: CreditreportService, useClass: CreditReportServiceMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesReconfirmView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
