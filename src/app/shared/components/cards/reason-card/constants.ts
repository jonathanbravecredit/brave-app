import { IDisputeTradelineReasonCard as IDTLRC} from './interfaces';

// WARNING: Use for mock and test purposes only.
export const MOCK_TRADELINE_REASON_CARD: { DEFAULT: IDTLRC; CUSTOM_USER_REASON: IDTLRC; } = {
  DEFAULT: {
    allowUserInput: false,
    text: 'This is a test example.',
    isSelected: false
  },
  CUSTOM_USER_REASON: {
    allowUserInput: true,
    text: 'This is a test example.',
    isSelected: false
  }
};
