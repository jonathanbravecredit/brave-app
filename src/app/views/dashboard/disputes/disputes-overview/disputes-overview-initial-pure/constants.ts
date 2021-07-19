import { DisputeStatus } from "@shared/components/cards/dispute-cards/dispute-regular-card/enums";
import { IDisputeBasic } from "./interface";

export const MOCK_DEFAULT_USER_CURRENT_DISPUTE: IDisputeBasic[] = [
  {
    creditorName: 'Bank of States, N.A.',
    accountType: 'Collections Account',
    dateSubmitted: '05/15/2021',
    status: DisputeStatus.Processing
  }
];
