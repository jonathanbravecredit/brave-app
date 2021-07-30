import { Pipe, PipeTransform } from '@angular/core';
import { IDisputeCreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

export interface IDisputeToDisputeFindingOutput {
  reportCreatedAt: string;
  fileIdentificationNumber: string;
  resultCode: string;
  tradeLinePartition?: ITradeLinePartition;
  publiceRecordPartition?: unknown;
  personalRecordPartition?: unknown;
  updatedValues: string[];
  type: 'tradeline' | 'public-record' | 'personal-info';
}

@Pipe({
  name: 'disputeToDisputeFinding',
})
export class DisputeToDisputeFindingPipe implements PipeTransform {
  transform(dispute: DisputeInput): IDisputeToDisputeFindingOutput | null {
    const creditBureau: IDisputeCreditBureau = dispute.disputeCreditBureau
      ? JSON.parse(dispute.disputeCreditBureau)
      : null;
    const disputeItems: IDisputeItem = dispute.disputeItems ? JSON.parse(dispute.disputeItems) : null;
    if (!creditBureau || !disputeItems) return null;
    let output: IDisputeToDisputeFindingOutput = {
      reportCreatedAt: dispute.closedOn || '--',
      fileIdentificationNumber: `${creditBureau.creditBureau.transactionControl.tracking.identifier.fin}-${creditBureau.creditBureau.transactionControl.tracking.identifier.activityNumber}`,
      tradeLinePartition: disputeItems.tradeline,
      publiceRecordPartition: undefined,
      personalRecordPartition: undefined,
      resultCode: '--',
      updatedValues: ['--'],
      type: 'tradeline',
    };
    return output;
  }
}
