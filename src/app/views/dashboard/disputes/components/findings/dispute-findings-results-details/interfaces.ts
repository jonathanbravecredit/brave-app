export interface IInvestigationResult {
  updatedFields: string[];
  type: TInvestigationResultCode;
}

export interface IInvestigationResultInfo {
  type?: TInvestigationResultCode;
  title: string;
  subtitle?: string;
  description: string;
  detailDescription?: string;
}

export type TInvestigationResultCode =
  | 'deleted'
  | 'dispute_info_updated'
  | 'info_updated'
  | 'dispute_info_other_updated'
  | 'reinserted'
  | 'verified_updated'
  | 'verified_accurate'
  | 'verified_accurate_updated'
  | 'personal_item';

export interface IInvestigationResults<TInvestigationResultType, IInvestigationResultInfo> {}
