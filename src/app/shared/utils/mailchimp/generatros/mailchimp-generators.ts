import { GlobalMergeVar, MailMessage } from '@shared/utils/mailchimp/interfaces';
import { MailchimpBase } from '@shared/utils/mailchimp/mailchimp-base';

export class MailchimpGenerators extends MailchimpBase {
  constructor() {
    super();
  }

  static createMailMessage(email: string, action: string, globalMergeVars?: GlobalMergeVar[]): MailMessage {
    return {
      email,
      action,
      globalMergeVars,
    };
  }
}
