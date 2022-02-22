import { report } from 'process';

export const MOCKPROGRESSTRACKERDATA: IGoalHolder = {
  initiative: {
    id: 'future_score',
    currentGoal: 'buy_house',
  },
  aggregateGoals: [
    {
      order: 0,
      id: 'credit_card',
      progress: 'in_progress',
      label: 'Your plan to get a credit card:',
      header: "Let's help you get a credit card!",
      text: "We've made it easy for you to reach your goal and claim your FutureScore. Follow these steps, and with healthy financial habits, you could get your credit card in not time!",
      goals: [
        {
          order: 0,
          id: 'review_report',
          stepText: 'Review your report',
          title: 'Review your credit report',
          progress: 'complete',
          pointsGain: '+19',
          successHeader: 'Greate job reviewing your credit report',
          successText: 'Checking it on a monthly basis ensures the information on your reports remains yours',
          questionHeader: 'Do you have at least $9,450 saved?',
          cardInfo: {
            buttonText: 'Review my report',
            textOne:
              "You could gain an average of 19 points on your score if there's an error on your report, or even up to 130*.",
            textTwo:
              "Look for accounts or personal information you don't recognize. Find an issue? Dispute it in our app to request it be removed which could help your score.",
          },
        },
        {
          order: 1,
          id: 'claim_future_score',
          stepText: 'Claim your FutureScore',
          title: 'Claim Your FutureScore to get your dream credit card',
          progress: 'not_started',
          pointsGain: '+53',
          successHeader: 'Good work opening the account!',
          successText: 'Make on-time payments on this and your other accounts to get the full benefit',
          questionHeader: 'Do you have at least $9,450 saved?',
          cardInfo: {
            buttonText: 'Open my account',
            textOne:
              'Opening this account can help you grow score 53 points or more! It can also automatically unlock a secured credit card, to reach an unsecured card quicker.',
            textTwo: 'With on-time payments, you can grow your score and also build up a nice savings account!',
          },
        },
      ],
    },
  ],
};

export interface dataForUser {
  currentGoalId: string;
  completion: boolean[]; ///[true, false, false, true]
}

export interface IGoalHolder {
  initiative: {
    id: string;
    currentGoal: string;
  };
  aggregateGoals: IGoalSummary[];
}

export interface IGoalSummary {
  order: number;
  id: string;
  progress: string;
  label: string;
  header: string;
  text: string;
  goals: IGoalInterface[];
}

export interface IGoalInterface {
  order: number;
  id: string;
  stepText: string;
  title: string;
  progress: string;
  pointsGain: string;
  successHeader: string;
  successText: string;
  questionHeader: string;
  cardInfo: {
    buttonText: string;
    textOne: string;
    textTwo: string;
  };
}

// {
//   id: 'abc',
//   initiative: 'future_score',
//   initiativeReason: 'buy_house',
//   initiativeStatus: 'active',
//   primaryTasks: [
//     {
//       parentId: 'buy_house',
//       taskId: 'credit_card',
//       taskStatus: 'in_progress',
//       taskOrder: 0,
//       taskCard: {
//         title: 'Your plan to get a credit card:',
//         header: "Let's help you get a credit card!",
//         textOne:
//           "We've made it easy for you to reach your goal and claim your FutureScore. Follow these steps, and with healthy financial habits, you could get your credit card in not time!",
//         textTwo: '',
//         textButton: '',
//       },
//       subTasks: [
//         {
//           parentId: 'credit_card',
//           taskId: 'review_report',
//           taskStatus: 'complete',
//           taskOrder: 0,
//           taskCard: {
//             title: 'Review your credit',
//             header: 'Review your credit report',
//             textOne:
//               "You could gain an average of 19 points on your score if there's an error on your report, or even up to 130*.",
//             textTwo:
//               "Look for accounts or personal information you don't recognize. Find an issue? Dispute it in our app to request it be removed which could help your score.",
//             textButton: 'Review my report',
//             metric: '+19',
//           },
//         },
//         {
//           parentId: 'credit_card',
//           taskId: 'claim_future_score',
//           taskStatus: 'not_started',
//           taskOrder: 1,
//           taskCard: {
//             title: 'Claim your FutureScore',
//             header: 'Claim Your FutureScore to get your dream credit card',
//             textOne:
//               'Opening this account can help you grow score 53 points or more! It can also automatically unlock a secured credit card, to reach an unsecured card quicker.',
//             textTwo: 'With on-time payments, you can grow your score and also build up a nice savings account!',
//             textButton: 'Open my account',
//             metric: '+53',
//           },
//         },
//       ],
//     },
//   ],
// };

interface overallGoal {
  id: string;
  itiative: string;
  initiativeReason: string;
  initiativeStatus: string;
  primaryTasks: goalTask[];
}

interface goalTask {
  parentId: string;
  taskId: string;
  taskStatus: string;
  taskOrder: number;
  taskCard: {
    title: string;
    header: string;
    textOne: string;
    textTwo: string;
    textButton: string;
  };
  // subTasks: secondaryTask[];
}

// interface secondaryTask extends goalTask {
//   taskCard: {
//     metric: string;
//     successHeader: string;
//     successText: string;
//     questionHeader: string;
//   };
// }
