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
  transform(dispute: DisputeInput): IDisputeToDisputeFindingOutput | undefined {
    debugger;
    const status = dispute.disputeStatus;
    if (!status) return {} as IDisputeToDisputeFindingOutput;
    if (status.toLowerCase() === 'opendispute') return this.mapOpenDispute(dispute);
    // get and parse the credit bureau data
    const creditBureau: IDisputeCreditBureau = dispute.disputeCreditBureau
      ? JSON.parse(dispute.disputeCreditBureau)
      : undefined;
    // get and parse the investigation results data
    const tempReport: {
      TrueLinkCreditReportType?: any;
      trueLinkCreditReportType?: any;
    } = dispute.disputeInvestigationResults ? JSON.parse(dispute.disputeInvestigationResults) : undefined;
    const investigationResults: ITrueLinkCreditReportType = tempReport?.TrueLinkCreditReportType
      ? tempReport?.TrueLinkCreditReportType
      : tempReport?.trueLinkCreditReportType;

    const disputeItems: IDisputeTradelineItem = dispute.disputeItems ? JSON.parse(dispute.disputeItems) : null;
    if (!creditBureau || !disputeItems) return this.mapOpenDispute(dispute);
    return this.mapClosedDispute(disputeItems, dispute, creditBureau, investigationResults);
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

  mapClosedDispute(
    disputeItems: IDisputeTradelineItem,
    dispute: DisputeInput,
    creditBureau: IDisputeCreditBureau,
    investigationResults: ITrueLinkCreditReportType,
  ): IDisputeToDisputeFindingOutput {
    return {
      status: 'closed',
      reportCreatedAt: dispute.closedDisputes?.lastUpdatedDate || '--',
      fileIdentificationNumber: `${creditBureau?.creditBureau?.transactionControl?.tracking?.identifier?.fin}-${creditBureau?.creditBureau?.transactionControl?.tracking?.identifier?.activityNumber}`,
      creditBureau: creditBureau.creditBureau,
      investigationResults: investigationResults,
    };
  }
}
