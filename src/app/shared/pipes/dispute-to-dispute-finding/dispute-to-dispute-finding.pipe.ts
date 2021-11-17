import { Pipe, PipeTransform } from '@angular/core';
import { ICreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { IDispute } from '@shared/interfaces/disputes';
import { ITrueLinkCreditReportType } from '@shared/interfaces/merge-report.interface';

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
    dispute: IDispute | null,
    creditBureau: ICreditBureau | undefined,
  ): IDisputeToDisputeFindingOutput | undefined {
    if (!dispute) return;
    const status = dispute.disputeStatus;
    if (!status) return {} as IDisputeToDisputeFindingOutput;
    if (status.toLowerCase() === 'opendispute') return this.mapOpenDispute(dispute);
    return this.mapClosedDispute(dispute, creditBureau);
  }

  mapOpenDispute(dispute: IDispute): IDisputeToDisputeFindingOutput {
    return {
      status: 'open',
      reportCreatedAt: dispute.openDisputes?.openDate || '--',
      fileIdentificationNumber: dispute.disputeLetterCode || '--',
      estimatedCompletionDate: dispute.openDisputes?.estimatedCompletionDate || '--',
      totalDisputedItems: `${dispute.openDisputes?.totalDisputedItems || '--'}`,
    } as IDisputeToDisputeFindingOutput;
  }

  mapClosedDispute(dispute: IDispute, creditBureau: ICreditBureau | undefined): IDisputeToDisputeFindingOutput {
    return {
      status: 'closed',
      reportCreatedAt: dispute.closedDisputes?.lastUpdatedDate || '--',
      fileIdentificationNumber: `${creditBureau?.transactionControl?.tracking?.identifier?.fin}-${creditBureau?.transactionControl?.tracking?.identifier?.activityNumber}`,
    };
  }
}
