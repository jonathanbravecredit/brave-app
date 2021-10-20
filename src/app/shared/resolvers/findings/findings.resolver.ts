import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { DisputeService } from '@shared/services/dispute/dispute.service';

@Injectable({
  providedIn: 'root',
})
export class FindingsResolver implements Resolve<string> {
  constructor(private disputes: DisputeService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {
    const params = route.params as { investigation: string; creditbureau: string };
    const resp = await this.disputes.getInvestigationResultsById(params.investigation);
    // need to get the credit bureau results too
    return resp.data || '';
  }
}
