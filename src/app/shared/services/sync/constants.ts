export const INIT_DATA = {
  id: '',
  user: {
    id: '',
    onboarding: {
      lastActive: 0,
      lastComplete: -1,
      started: true,
    },
  },
  agencies: {
    transunion: { authenticated: false },
    experian: { authenticated: false },
    equifax: { authenticated: false },
  },
  preferences: {
    showAllAccounts: {
      creditCards: true,
      collectionsAccounts: true,
      installmentLoans: true,
      mortgages: true,
    },
  },
};

// const test = {
//   message:
//     'Connection failed: {
//       "errors": [
//         {
//           "errorType":
//             "Unauthorized",
//           "message": "Not Authorized to access onUpdateAppData on type Subscription"
//         }]
// }',
// };
