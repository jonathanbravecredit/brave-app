import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { BehaviorSubject } from 'rxjs';

import { DisputesPersonalView } from './disputes-personal.view';

//private router: Router, private route: ActivatedRoute, private disputeService: DisputeService

describe('DisputesPersonalView', () => {
  let component: DisputesPersonalView;
  let fixture: ComponentFixture<DisputesPersonalView>;
  let routerMock: any;
  let routeMock: any;
  let disputeServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['']);
    routeMock = jasmine.createSpyObj('ActivatedRoute', ['']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['sendStartDispute', 'clearDisputes']);
    disputeServiceMock.personalItem$ = new BehaviorSubject<IPersonalItemsDetailsConfig>(
      {} as IPersonalItemsDetailsConfig,
    );
    await TestBed.configureTestingModule({
      declarations: [DisputesPersonalView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPersonalView);
    component = fixture.componentInstance;
    fixture.detectChanges();

    disputeServiceMock.sendStartDispute.and.returnValue({ success: true, error: false, data: {} });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
