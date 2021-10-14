import { IDisputeReasonCard as IDTLRC } from './interfaces';

// WARNING: Use for mock and test purposes only.
export const MOCK_TRADELINE_REASON_CARD: { DEFAULT: IDTLRC; CUSTOM_USER_REASON: IDTLRC } = {
  DEFAULT: {
    allowUserInput: false,
    text: 'This is a test example.',
    isSelected: false,
  },
  CUSTOM_USER_REASON: {
    allowUserInput: true,
    text: 'This is a test example.',
    isSelected: false,
  },
};

export const REASON_CARD_CONTENT = {
  textAreaHeader: `If you can't find your reason, provide details below.`,
  textAreaSubheader: `Please don't include personal medical or information that can identify you (such as your social security number)`,
  // alertHeader: `Alert:`,
  // alertSubheaderOne: `If selecting 'Other, provide details in "Additional Comments" field below', you cannot select any additional
  // reasons to dispute.`,
  // alertSubheaderTwo: `You may neither continue to provide details for your dispute, or select up to two alternative reasons.`,
};
