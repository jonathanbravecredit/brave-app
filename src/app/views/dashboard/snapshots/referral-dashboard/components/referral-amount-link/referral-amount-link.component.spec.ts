import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IGroupedYearMonthReferral, IReferral } from '@shared/interfaces/referrals.interface';
import { DOMHelper } from '@testing/dom-helper';
import { ReferralDashboardPureView } from '@views/dashboard/snapshots/referral-dashboard/referral-dashboard-pure/referral-pure.view';

import { ReferralAmountLinkComponent } from './referral-amount-link.component';

describe('ReferralAmountLinkComponent', () => {
  let component: ReferralAmountLinkComponent;
  let fixture: ComponentFixture<ReferralAmountLinkComponent>;
  let dh: DOMHelper<ReferralAmountLinkComponent>;

  const referralMock: IReferral = {
    id: '',
    createdOn: '',
    modifiedOn: '',
    processingStatus: 'paid',
    enrollmentStatus: 'enrolled',
    referralCode: 'testReferralCode',
    referredByCode: '',
    campaign: 'jan2020',
    referralStatus: 'active',
    referralApproved: true,
  };

  const metricsMock: IGroupedYearMonthReferral[] = [
    {
      yearMonth: 122022,
      referrals: 4,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralAmountLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralAmountLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    dh = new DOMHelper(fixture);
  });

  beforeEach(() => {
    component.referral = referralMock;
    component.metrics = metricsMock;
    component.disabled = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the link if the referral program is enabled', () => {
    const result = dh.count('input')

    expect(result).toEqual(1)
  })

  it('should show the gauge if the referral program is disabled', () => {
    component.disabled = true;
    const result = dh.count('brave-percentage-gauge')

    expect(result).toEqual(1)
  })
});
