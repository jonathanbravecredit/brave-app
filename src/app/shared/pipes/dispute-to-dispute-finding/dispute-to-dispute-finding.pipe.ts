import { Pipe, PipeTransform } from '@angular/core';
import { ICreditBureau, IDisputeCreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { ITrueLinkCreditReportType } from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IDisputeTradelineItem } from '@shared/services/dispute/dispute.interfaces';

export interface IDisputeToDisputeFindingOutput {
  status: string;
  reportCreatedAt: string;
  totalDisputedItems?: string;
  estimatedCompletionDate?: string;
  fileIdentificationNumber: string;
  creditBureau?: ICreditBureau;
  investigationResults?: ITrueLinkCreditReportType;
}

@Pipe({
  name: 'disputeToDisputeFinding',
})
export class DisputeToDisputeFindingPipe implements PipeTransform {
  transform(
    dispute: DisputeInput | null,
    creditBureau: ICreditBureau | undefined,
  ): IDisputeToDisputeFindingOutput | undefined {
    if (!dispute) return;
    const status = dispute.disputeStatus;
    if (!status) return {} as IDisputeToDisputeFindingOutput;
    if (status.toLowerCase() === 'opendispute') return this.mapOpenDispute(dispute);
    return this.mapClosedDispute(dispute, creditBureau);
  }

  mapOpenDispute(dispute: DisputeInput): IDisputeToDisputeFindingOutput {
    return {
      status: 'open',
      reportCreatedAt: dispute.openDisputes?.openDate || '--',
      fileIdentificationNumber: dispute.disputeLetterCode || '--',
      estimatedCompletionDate: dispute.openDisputes?.estimatedCompletionDate || '--',
      totalDisputedItems: `${dispute.openDisputes?.totalDisputedItems || '--'}`,
    } as IDisputeToDisputeFindingOutput;
  }

  mapClosedDispute(dispute: DisputeInput, creditBureau: ICreditBureau | undefined): IDisputeToDisputeFindingOutput {
    return {
      status: 'closed',
      reportCreatedAt: dispute.closedDisputes?.lastUpdatedDate || '--',
      fileIdentificationNumber: `${creditBureau?.transactionControl?.tracking?.identifier?.fin}-${creditBureau?.transactionControl?.tracking?.identifier?.activityNumber}`,
    };
  }
}
