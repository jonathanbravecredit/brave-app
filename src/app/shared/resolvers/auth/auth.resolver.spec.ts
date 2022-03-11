import { TestBed } from '@angular/core/testing';
import { CampaignService } from '@shared/services/campaign/campaign.service';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { of } from 'rxjs';

import { AuthResolver } from './auth.resolver';

describe('AuthResolver', () => {
  let resolver: AuthResolver;
  let referralsMock: any;
  let campaignMock: any;

  beforeEach(() => {
    referralsMock = jasmine.createSpyObj('ReferralsService', ['validateReferralCode'], { referredByCode: of('abc') });
    campaignMock = jasmine.createSpyObj('CampaignService', ['setCampaignActive']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ReferralsService, useValue: referralsMock },
        { provide: CampaignService, useValue: campaignMock },
      ],
    });
    resolver = TestBed.inject(AuthResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
