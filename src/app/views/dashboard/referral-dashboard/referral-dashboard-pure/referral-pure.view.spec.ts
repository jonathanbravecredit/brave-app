import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { DOMHelper } from '@testing/dom-helper';

import { ReferralDashboardPureView } from './referral-pure.view';

describe('ReferralPureView', () => {
  let component: ReferralDashboardPureView;
  let fixture: ComponentFixture<ReferralDashboardPureView>;
  let dh: DOMHelper<ReferralDashboardPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralDashboardPureView],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralDashboardPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
