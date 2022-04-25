import { TestBed } from '@angular/core/testing';
import { Helper } from '@testing/test-helper';
import { CAMPAIGN_ACTIVE } from '@testing/__mocks__/campaign.mocks';
import { REFERRAL_ACTIVE } from '@testing/__mocks__/referral.mocks';

import { DashboardReferralGaugeService } from './dashboard-referral-gauge.service';

const setup = () => {
  const referralMock = jasmine.createSpyObj('ReferralsService', ['getReferral']);
  const campaignMock = jasmine.createSpyObj('CampaignService', ['getCampaign']);
  referralMock.getReferral.and.returnValue(Promise.resolve(REFERRAL_ACTIVE));
  campaignMock.getCampaign.and.returnValue(Promise.resolve(CAMPAIGN_ACTIVE));
  const service = new DashboardReferralGaugeService(referralMock, campaignMock);
  return { service, campaignMock, referralMock };
};

describe('DashboardReferralGaugeService', () => {
  let service: any;
  let campaignMock: any;
  let referralMock: any;
  let h: Helper<DashboardReferralGaugeService>;

  beforeEach(() => {
    const mocks = setup();
    service = mocks.service;
    campaignMock = mocks.campaignMock;
    referralMock = mocks.referralMock;
    h = new Helper<DashboardReferralGaugeService>(service);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Methods', () => {
    it('should have a method called "getData"', () => {
      expect(h.hasMethod(service, 'getData')).toEqual(true);
    });
  });

  describe('getData', () => {
    it('should return the values from referral service as referral key if no errors', async () => {
      const { referral } = await service.getData();
      expect(referral).toEqual(REFERRAL_ACTIVE);
    });
    it('should return the values from campaign service as campaign key if no errors', async () => {
      const { campaign } = await service.getData();
      expect(campaign).toEqual(CAMPAIGN_ACTIVE);
    });
    it('should return null for referral if referralSerivce.getReferral errors out', async () => {
      referralMock.getReferral.and.returnValue(Promise.reject());
      const { referral } = await service.getData();
      expect(referral).toBeNull();
    });
    it('should return null for campaign if campaignService.getCampaign errors out', async () => {
      campaignMock.getCampaign.and.returnValue(Promise.reject());
      const { campaign } = await service.getData();
      expect(campaign).toBeNull();
    });
  });
});
