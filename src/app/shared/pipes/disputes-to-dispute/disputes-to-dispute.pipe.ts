import { Pipe, PipeTransform } from '@angular/core';
import { DisputeInput } from '@shared/services/aws/api.service';

@Pipe({
  name: 'disputesToDispute',
})
export class DisputesToDisputePipe implements PipeTransform {
  transform(disputes: (DisputeInput | null)[], disputeId: string): DisputeInput | undefined {
    if (!disputes.length) return;
    const clean = disputes.filter((d) => d?.disputeId) as DisputeInput[];
    const results = clean.find((d) => d.disputeId == disputeId);
    return results;
  }
}
