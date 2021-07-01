import { IDisputeTradelineReasonCardPage } from './interfaces';

// WARNING: Use for mock and test purposes only.
export const MOCK_TRADELINE_DISPUTE_PROCESS_REASONS: IDisputeTradelineReasonCardPage[] = [
  {
    pageIndex: 0,
    items: [
      {
        text: 'Other, provide details in "Additional Comments" field below',
        allowUserInput: true,
        isSelected: false,
        userInputDescriptionText: 'Please don\'t include personal medical or information that can identify you (such as your social security number)'
      },
      {
        text: 'The information in the remarks is missing or incorrect',
        allowUserInput: false,
        isSelected: false
      },
      {
        text: 'I am on active military duty',
        allowUserInput: false,
        isSelected: false
      },
      {
        text: 'This account is not closed',
        allowUserInput: false,
        isSelected: false
      }
    ]
  },
  {
    pageIndex: 1,
    items: [
      {
        text: 'I am not reponsible for this account (e.g. belongs to ex-pouse or business account)',
        allowUserInput: false,
        isSelected: false
      },
      {
        text: 'I have no knowledge of this collection account',
        allowUserInput: false,
        isSelected: false
      },
      {
        text: 'I am not responsible for this account (e.g. belongs to ex-pouse or business account)',
        allowUserInput: false,
        isSelected: false
      },
      {
        text: 'This is not my account it; it belongs to a relative or person with similar name/address',
        allowUserInput: false,
        isSelected: false
      }
    ]
  }
];
