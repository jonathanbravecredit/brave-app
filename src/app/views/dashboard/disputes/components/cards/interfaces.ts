import { DisputeInput } from '@shared/services/aws/api.service';
import { DisputeStatus } from './enums';

export type TDisputeStatusDisplayInfoArg = 'colorClass' | 'text';

export interface IDisputeStatusDisplayInfo {
  text: string;
  colorClass: string;
}

export interface IDisputeBase {
  dispute: DisputeInput | undefined | null;
  creditorName: string;
}

export interface IDisputeCurrent extends IDisputeBase {
  status: DisputeStatus;
  accountType: string;
  dateSubmitted: string;
  estCompletionDate: string;
}

export interface IDisputeHistorical extends IDisputeBase {
  latestDateSubmitted: string;
  decision: string;
  resultReceived?: string;
}

export type TDisputeEntity = Partial<IDisputeHistorical> & Partial<IDisputeCurrent>;
