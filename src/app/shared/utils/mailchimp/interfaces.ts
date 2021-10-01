export interface MailMessage {
  email: string;
  action: string;
  globalMergeVars?: GlobalMergeVar[];
}

export interface MailMessageTo {
  email: string;
  type: string;
}
export interface MergeVar {
  name: string;
  content: string;
}
export interface GlobalMergeVar extends MergeVar {}
export interface RecipientMergeVars {
  rcpt: string;
  vars: MergeVar[];
}
