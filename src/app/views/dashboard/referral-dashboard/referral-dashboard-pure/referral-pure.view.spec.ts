import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { DOMHelper } from '@testing/dom-helper';

import { ReferralDashboardPureView } from './referral-pure.view';

describe('ReferralPureView', () => {
  let component: ReferralDashboardPureView;
  let fixture: ComponentFixture<ReferralDashboardPureView>;
  let dh: DOMHelper<ReferralDashboardPureView>;

  // const referralMock: IReferral = {
  //   id = '',
  //   referralCode = '',

  //   referredByCode = '',
  //   referredById = '',
  //   referredByEmail = '',

  //   eligible = 1,
  //   suspended = false,
  //   enrolled = false,

  //   totalReferred = 0,
  //   totalEarned = 0,
  //   totalBonus = 0,
  //   totalAddOn = 0,

  //   campaignActive = '',
  //   campaignActiveReferred = 0,
  //   campaignActiveEarned = 0,
  //   campaignActivePaid = 0,
  //   campaignActiveAddOn = 0,
  //   campaignActiveBonus = 0,

  //   campaignPrior = '',
  //   campaignPriorReferred = 0,
  //   campaignPriorEarned = 0,
  //   campaignPriorPaid = 0,
  //   campaignPriorAddOn = 0,
  //   campaignPriorBonus = 0,

  //   nextPaymentDate = '',
  //   notified = false,
  //   createdOn = '',
  //   modifiedOn = '',
  // };

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

  describe('check that all presentational changes are correct', () => {
    it('visual changes based on api input', () => {
      let divAmount = dh.count('div');

      expect(divAmount).toEqual(2);
    });
  });

  // describe('confirm that all component are being passed correct data', () => {
  //   it('should have metrics in referral amount link', () => {
  //     let result = dh.hasPropValue('brave-referral-amount-link', 'referral', referralMock);

  //     expect(result).toEqual(true);
  //   });
  // });
});
