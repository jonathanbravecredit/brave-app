import { IFindingsDefinition } from "./interfaces";

export const DEFAULT_FINDINGS_DEFINITIONS_FOR_ACCOUNTS: IFindingsDefinition[] = [
  { title: "Balance", description: "The balance owed as of the date the account was verified or reported" },
  { title: "Original Charge Off", description: "If applicable, the amount charged off due to non-payment of the account" },
  { title: "Credit Limit", description: "The maximum amount of credit approved by the creditor on the account" },
  { title: "Past Due", description: "The amount past due as of the date the account was verified or reported" },
  { title: "Date Opened", description: "The date the account was opened" },
  { title: "Pay Status", description: "The current status of the account; how you are currently paying" },
  { title: "High Balance", description: "The highest amount ever owed on an account" },
  { title: "Remarks", description: "If applicable, the creditor may provide additional information here related to the account" },
  { title: "Last Payment Made", description: "The date the creditor received the last payment on the account" },
  { title: "Responsibility", description: "The type of contractual ownership (individual, joint, authorized user, etc.) of the account" },
  { title: "Maximum Delinquency", description: "If applicable, the maximum amount past due before an account becomes a charge-off or a collection account" },
  { title: "Terms", description: "The monthly payment amount or monthly minimum payment due on the account" }
];

export const DEFAULT_FINDINGS_DEFINITIONS_FOR_PUBLIC_RECORDS: IFindingsDefinition[] = [
 { title: "Court Type", description: "The court where the item was filed" },
 { title: "Docket Number", description: "The number assigned to the item by the court" },
 { title: "Date Filed", description: "The date the item was filed" },
 { title: "Plaintiff", description: "The name of the party who initiated the item" },
 { title: "Date Paid", description: "The date the item was paid or otherwise, dismissed or discharged" },
 { title: "Type", description: "The nature of the public record filed" }
];

export const DEFAULT_FINDINGS_DEFINITIONS = {
  'accounts': DEFAULT_FINDINGS_DEFINITIONS_FOR_ACCOUNTS,
  'public-records': DEFAULT_FINDINGS_DEFINITIONS_FOR_PUBLIC_RECORDS
};
