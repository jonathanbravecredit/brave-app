import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralDashboardView } from './referral-dashboard.view';

describe('ReferralDashboardView', () => {
  let component: ReferralDashboardView;
  let fixture: ComponentFixture<ReferralDashboardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralDashboardView ]
    })
    .compileComponents();
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
