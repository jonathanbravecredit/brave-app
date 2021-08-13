import { Pipe, PipeTransform } from '@angular/core';
import { ICreditBureau, IDisputeCreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

export interface IDisputeToDisputeFindingOutput {
  reportCreatedAt: string;
  fileIdentificationNumber: string;
  status: string;
  resultCode: string;
  creditBureau?: ICreditBureau;
  tradeLinePartition?: ITradeLinePartition;
  publiceRecordPartition?: IPublicPartition;
  personalRecordPartition?: IBorrower;
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
    console.log('dispute finding pipe:status ===> ', status);
    if (!status) return {} as IDisputeToDisputeFindingOutput;
    if (status.toLowerCase() === 'opendispute') return this.mapOpenDispute(dispute);
    const creditBureau: IDisputeCreditBureau = dispute.disputeCreditBureau
      ? JSON.parse(dispute.disputeCreditBureau)
      : undefined;
    console.log('dispute finding pipe:creditBureau ===> ', creditBureau);
    const disputeItems: IDisputeItem = dispute.disputeItems ? JSON.parse(dispute.disputeItems) : null;
    if (!creditBureau || !disputeItems) return;
    console.log('dispute finding pipe:disputeItems ===> ', disputeItems);
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
      creditBureau: creditBureau.creditBureau,
      tradeLinePartition: disputeItems.tradeline,
      publiceRecordPartition: undefined,
      personalRecordPartition: undefined,
      resultCode: '--',
      updatedValues: ['--'],
      type: 'tradeline',
    };
  }
}
