import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';

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
      imports: [HttpClientTestingModule],
      declarations: [ReferralDashboardView],
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
