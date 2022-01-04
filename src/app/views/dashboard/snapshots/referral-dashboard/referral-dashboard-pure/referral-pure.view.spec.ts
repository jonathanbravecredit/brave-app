import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IGroupedYearMonthReferral, IPayments, IReferral } from '@shared/interfaces/referrals.interface';
import { DOMHelper } from '@testing/dom-helper';

import { ReferralDashboardPureView } from './referral-pure.view';

describe('ReferralPureView', () => {
  let component: ReferralDashboardPureView;
  let fixture: ComponentFixture<ReferralDashboardPureView>;
  let dh: DOMHelper<ReferralDashboardPureView>;

  const paymentMock: IPayments = {
    paymentsPending: 2,
    paymentsProcessed: 2,
    paymentScheduledDate: '',
    currency: 'USD',
    earningsAmount: 10,
  };

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
    component.payments = paymentMock;
    component.referral = referralMock;
    component.metrics = metricsMock;
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

  describe('confirm that all component are being passed correct data', () => {

    it('should have metrics in referral amount link', () => {
      let result = dh.hasPropValue('brave-referral-amount-link', 'referral', referralMock);

      expect(result).toEqual(true);
    });

    it('should have metrics in referral amount link', () => {
      let result = dh.hasPropValue('brave-referral-amount-link', 'metrics', metricsMock);

      expect(result).toEqual(true);
    });

    it('should have metrics in referral banner', () => {
      let result = dh.hasPropValue('brave-referral-banner', 'metrics', metricsMock);

      expect(result).toEqual(true);
    });

    it('should have metrics in referral earnings', () => {
      let result = dh.hasPropValue('brave-referral-earnings', 'referral', referralMock);

      expect(result).toEqual(true);
    });

    it('should have metrics in referral earnings', () => {
      let result = dh.hasPropValue('brave-referral-earnings', 'metrics', metricsMock);

      expect(result).toEqual(true);
    });
  });

  it('should have proper amount based on payments info', () => {
    let result = dh.findAll('h1');

    console.log('RESULT ==>>', result);

    console.log('RESULT', component.payments);

    // expect(result).toEqual(); //TODO
  });
});
