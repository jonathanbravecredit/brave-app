import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ReferralDashboardView } from './referral-dashboard.view';

class RouteMock {
  data = of();
}

describe('ReferralDashboardView', () => {
  let component: ReferralDashboardView;
  let fixture: ComponentFixture<ReferralDashboardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralDashboardView],
      providers: [{ provide: ActivatedRoute, useClass: RouteMock }],
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
