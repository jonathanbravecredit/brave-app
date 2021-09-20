import { AppStatus, AppStatusReason } from "@shared/utils/brave/constants";

export interface IAppStatus {
  status: AppStatus;
  statusReason: AppStatusReason;
  statusReasonDescription: string;
  lastStatusModifiedOn: string;
  nextStatusModifiedOn: string;
}