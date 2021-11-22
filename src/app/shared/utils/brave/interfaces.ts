import { ITUServiceResponse } from '@shared/interfaces';
import { AppStatus, AppStatusReason } from '@shared/utils/brave/constants';

export interface IAppStatus {
  status: AppStatus;
  statusReason: AppStatusReason;
  statusReasonDescription: string;
  lastStatusModifiedOn: string;
  nextStatusModifiedOn: string;
}

export interface IBraveTechnicalError extends ITUServiceResponse<undefined> {}

export interface IProxyRequest<T> {
  service: string;
  command: string;
  message: T;
}
