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

  beforeEach(() => {
    // component.referral = referralMock;
    component.disabled = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isSuspended to false if referral.suspended is falsy on init', () => {
    component.referral = undefined
    component.ngOnInit()
    expect(component.isSuspended).toBeFalse()
  })

  it('should set isSuspended to true if referral.suspended os true on init', () => {
    component.referral = { suspended: true } as IReferral
    component.ngOnInit()
    expect(component.isSuspended).toBeTrue()
  })
});
