import { TestBed } from '@angular/core/testing';
import { CampaignResolver } from '@shared/resolvers/campaign/campaign.resolver';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { ReferralRecordResolver } from '../referral-record/referral-record.resolver';

import { ReferralResolver } from './referral.resolver';

//campaignResolver: CampaignResolver

describe('ReferralResolver', () => {
  let resolver: ReferralResolver;
  let interstitialmock: any;
  let referralMetricsmock: any;
  let referralRecordmock: any;
  let referralPaymentsmock: any;
  let campaignResolvermock: any;

  beforeEach(() => {
    interstitialmock = jasmine.createSpyObj('InterstitialService', ['']);
    referralMetricsmock = jasmine.createSpyObj('ReferralMetricsResolver', ['']);
    referralRecordmock = jasmine.createSpyObj('ReferralRecordResolver', ['']);
    referralPaymentsmock = jasmine.createSpyObj('ReferralPaymentsResolver', ['']);
    campaignResolvermock = jasmine.createSpyObj('CampaignResolver', ['']);

    TestBed.configureTestingModule({
      providers: [
        { provide: InterstitialService, useValue: interstitialmock },
        { provide: ReferralRecordResolver, useValue: referralRecordmock },
        { provide: CampaignResolver, useValue: campaignResolvermock },
      ],
    });
    resolver = TestBed.inject(ReferralResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
