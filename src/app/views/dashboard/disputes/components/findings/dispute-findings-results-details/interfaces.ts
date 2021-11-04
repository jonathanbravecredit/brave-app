export interface IInvestigationResult {
  updatedFields: string[];
  type: TInvestigationResultType;
}

export interface IInvestigationResultInfo {
  type: TInvestigationResultType;
  title: string;
  subtitle?: string;
  description: string;
  detailDescription?: string;
}

export type TInvestigationResultType =
  | 'deleted'
  | 'dispute_info_updated'
  | 'info_updated'
  | 'dispute_info_other_updated'
  | 'reinserted'
  | 'verified_updated'
  | 'verified_accurate'
  | 'verified_accurate_updated'
  | 'personal_item';
