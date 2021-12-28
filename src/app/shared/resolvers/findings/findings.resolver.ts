import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DisputeService } from '@shared/services/dispute/dispute.service';

export interface IFindingsResolver {
  investigationResults: string;
  creditBureauResults: string;
}

@Injectable({
  providedIn: 'root',
})
export class FindingsResolver implements Resolve<IFindingsResolver> {
  constructor(private disputes: DisputeService) {}
  async resolve(route: ActivatedRouteSnapshot): Promise<IFindingsResolver> {
    const params = route.params as { investigation: string; creditbureau: string };
    const irResp = await this.disputes.getInvestigationResultsById(params.investigation);
    const cbResp = await this.disputes.getCreditBureauResultsById(params.creditbureau);
    const resp = {
      investigationResults: irResp.data || '',
      creditBureauResults: cbResp.data || '',
    };
    return resp;
  }
}
