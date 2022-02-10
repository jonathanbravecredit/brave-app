import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { CampaignService } from '@shared/services/campaign/campaign.service';

@Injectable({
  providedIn: 'root',
})
export class CampaignResolver implements Resolve<ICampaign> {
  constructor(protected campaignService: CampaignService) {}
  async resolve(): Promise<ICampaign> {
    return await this.campaignService.getCampaign();
  }
}
