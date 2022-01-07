import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';
import { BehaviorSubject, of } from 'rxjs';

import { ReferralDashboardView } from './referral-dashboard.view';

class RouteMock {
  data = of();
}

describe('ReferralDashboardView', () => {
  let component: ReferralDashboardView;
  let fixture: ComponentFixture<ReferralDashboardView>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['']);
    await TestBed.configureTestingModule({
      declarations: [ReferralDashboardView],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralDashboardView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
