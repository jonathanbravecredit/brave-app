import { Pipe, PipeTransform } from '@angular/core';
import { ICreditBureau, IDisputeCreditBureau } from '@shared/interfaces/credit-bureau.interface';
import {
  IBorrower,
  IPublicPartition,
  ITradeLinePartition,
  ITrueLinkCreditReportType,
} from '@shared/interfaces/merge-report.interface';
import { DisputeInput } from '@shared/services/aws/api.service';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

export interface IDisputeToDisputeFindingOutput {
  reportCreatedAt: string;
  fileIdentificationNumber: string;
  status: string;
  // resultCode: string;
  creditBureau?: ICreditBureau;
  investigationResults?: ITrueLinkCreditReportType;
  tradeLinePartition?: ITradeLinePartition;
  publiceRecordPartition?: IPublicPartition;
  personalRecordPartition?: IBorrower;
  // type: 'tradeline' | 'public-record' | 'personal-info';
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
    // get and parse the credit bureau data
    const creditBureau: IDisputeCreditBureau = dispute.disputeCreditBureau
      ? JSON.parse(dispute.disputeCreditBureau)
      : undefined;
    // get and parse the investigation results data
    const tempReport: {
      TrueLinkCreditReportType?: any;
      trueLinkCreditReportType?: any;
    } = dispute.disputeInvestigationResults ? JSON.parse(dispute.disputeInvestigationResults) : undefined;
    console.log('tempReport ===> ', tempReport);
    const investigationResults: ITrueLinkCreditReportType = tempReport?.TrueLinkCreditReportType
      ? tempReport?.TrueLinkCreditReportType
      : tempReport?.trueLinkCreditReportType;

    const disputeItems: IDisputeItem = dispute.disputeItems ? JSON.parse(dispute.disputeItems) : null;
    if (!creditBureau || !disputeItems) return;
    console.log('dispute finding pipe:creditBureau ===> ', creditBureau);
    console.log('dispute finding pipe:investigationResults ===> ', investigationResults);
    return this.mapClosedDispute(disputeItems, dispute, creditBureau, investigationResults);
  }

  mapOpenDispute(dispute: DisputeInput): IDisputeToDisputeFindingOutput {
    return {
      reportCreatedAt: dispute.openDisputes?.openDate || '--',
      status: 'open',
      fileIdentificationNumber: dispute.disputeLetterCode || '--',
      estimatedCompletionDate: dispute.openDisputes?.estimatedCompletionDate || '--',
      totalDisputedItems: `${dispute.openDisputes?.totalDisputedItems || '--'}`,
    } as IDisputeToDisputeFindingOutput;
  }

  mapClosedDispute(
    disputeItems: IDisputeItem,
    dispute: DisputeInput,
    creditBureau: IDisputeCreditBureau,
    investigationResults: ITrueLinkCreditReportType,
  ): IDisputeToDisputeFindingOutput {
    console.log('creditBureau ===> ', creditBureau, JSON.parse(JSON.stringify(creditBureau)));
    console.log('investigationResults ===> ', investigationResults, JSON.parse(JSON.stringify(investigationResults)));
    return {
      reportCreatedAt: dispute.closedOn || '--',
      status: 'closed',
      fileIdentificationNumber: `${creditBureau?.creditBureau?.transactionControl?.tracking?.identifier?.fin}-${creditBureau?.creditBureau?.transactionControl?.tracking?.identifier?.activityNumber}`,
      creditBureau: creditBureau.creditBureau,
      investigationResults: investigationResults,
    };
  }
}
