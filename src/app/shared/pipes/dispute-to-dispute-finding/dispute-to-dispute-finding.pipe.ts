import { Pipe, PipeTransform } from '@angular/core';
import { IDisputeCreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

export interface IDisputeToDisputeFindingOutput {
  reportCreatedAt: string;
  fileIdentificationNumber: string;
  status: string;
  resultCode: string;
  tradeLinePartition?: ITradeLinePartition;
  publiceRecordPartition?: unknown;
  personalRecordPartition?: unknown;
  updatedValues: string[];
  type: 'tradeline' | 'public-record' | 'personal-info';
  estimatedCompletionDate?: string;
  totalDisputedItems?: string;
}

@Pipe({
  name: 'disputeToDisputeFinding',
})
export class DisputeToDisputeFindingPipe implements PipeTransform {
  transform(dispute: DisputeInput): IDisputeToDisputeFindingOutput | undefined {
    const status = dispute.disputeStatus;
    if (!status) return {} as IDisputeToDisputeFindingOutput;
    if (status.toLowerCase() === 'opendispute') return this.mapOpenDispute(dispute);
    const creditBureau: IDisputeCreditBureau = dispute.disputeCreditBureau
      ? JSON.parse(dispute.disputeCreditBureau)
      : undefined;
    const disputeItems: IDisputeItem = dispute.disputeItems ? JSON.parse(dispute.disputeItems) : null;
    if (!creditBureau || !disputeItems) return;
    return this.mapClosedDispute(disputeItems, dispute, creditBureau);
  }

  mapOpenDispute(dispute: DisputeInput): IDisputeToDisputeFindingOutput {
    return {
      reportCreatedAt: dispute.openDisputes?.openDate || '--',
      status: 'open',
      fileIdentificationNumber: dispute.disputeLetterCode || '--',
      estimatedCompletionDate: dispute.openDisputes?.estimatedCompletionDate || '--',
      totalDisputedItems: `${dispute.openDisputes?.totalDisputedItems || '--'}`,
      resultCode: '--',
      type: 'tradeline',
    } as IDisputeToDisputeFindingOutput;
  }

  mapClosedDispute(
    disputeItems: IDisputeItem,
    dispute: DisputeInput,
    creditBureau: IDisputeCreditBureau,
  ): IDisputeToDisputeFindingOutput {
    return {
      reportCreatedAt: dispute.closedOn || '--',
      status: 'closed',
      fileIdentificationNumber: `${creditBureau.creditBureau.transactionControl.tracking.identifier.fin}-${creditBureau.creditBureau.transactionControl.tracking.identifier.activityNumber}`,
      tradeLinePartition: disputeItems.tradeline,
      publiceRecordPartition: undefined,
      personalRecordPartition: undefined,
      resultCode: '--',
      updatedValues: ['--'],
      type: 'tradeline',
    };
  }
}
