import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DisputeInput } from '@shared/services/aws/api.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';

interface IDisputeResolver {
  allDisputes: DisputeInput[] | undefined;
  currDispute: DisputeInput | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class DisputesResolver implements Resolve<IDisputeResolver> {
  constructor(private transunion: TransunionService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IDisputeResolver> {
    const { data: allDisputes } = await this.transunion.listAllDisputesByUser();
    const { data: currDispute } = await this.transunion.getCurrentDisputeByUser();
    return {
      allDisputes: allDisputes,
      currDispute: currDispute,
    };
  }
}
