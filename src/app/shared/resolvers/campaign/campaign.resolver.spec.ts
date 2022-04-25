import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@shared/services/auth/auth.service';
import { CampaignService } from '@shared/services/campaign/campaign.service';

import { CampaignResolver } from './campaign.resolver';

//protected campaignService: CampaignService

describe('CampaignResolver', () => {
  let resolver: CampaignResolver;
  let campaignServiceMock: any;

  beforeEach(() => {
    campaignServiceMock = jasmine.createSpyObj('CampaignService', ['getCampaign']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: CampaignService, useValue: campaignServiceMock }],
    });
    resolver = TestBed.inject(CampaignResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should run campaignService.getCampaign on resolve', () => {
    resolver.resolve()
    expect(campaignServiceMock.getCampaign).toHaveBeenCalled();
  });
});
