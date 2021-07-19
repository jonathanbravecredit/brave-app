import { DisputeStatus } from "@shared/components/cards/dispute-cards/dispute-regular-card/enums";

export interface IDisputeBasic {
  creditorName: string;
  status: DisputeStatus;
  accountType: string;
  dateSubmitted: string;
}
