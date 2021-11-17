import { Pipe, PipeTransform } from '@angular/core';
import { IDispute } from '@shared/interfaces/disputes';

@Pipe({
  name: 'disputesToDispute',
})
export class DisputesToDisputePipe implements PipeTransform {
  transform(disputes: (IDispute | null)[], disputeId: string): IDispute | undefined {
    if (!disputes.length) return;
    const clean = disputes.filter((d) => d?.disputeId) as IDispute[];
    const results = clean.find((d) => d.disputeId == disputeId);
    return results;
  }
}
