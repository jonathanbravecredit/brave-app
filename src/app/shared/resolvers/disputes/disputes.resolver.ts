import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IDispute } from '@shared/interfaces/disputes';
import { TransunionService } from '@shared/services/transunion/transunion.service';

interface IDisputeResolver {
  allDisputes: IDispute[] | undefined;
  currDispute: IDispute | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class DisputesResolver implements Resolve<IDisputeResolver> {
  constructor(private transunion: TransunionService) {}
  async resolve(): Promise<IDisputeResolver> {
    const { data: allDisputes } = await this.transunion.listAllDisputesByUser();
    const { data: currDispute } = await this.transunion.getCurrentDisputeByUser();
    return {
      allDisputes: allDisputes,
      currDispute: currDispute,
    };
  }
}
