export const MOCKPROGRESSTRACKERDATA = {
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
      text:
        "We've made it easy for you to reach your goal and claim your FutureScore. Follow these steps, and with healthy financial habits, you could get your credit card in not time!",
      goals: [
        {
          order: 0,
          id: 'review_report',
          stepText: 'Review your report',
          title: 'Review your credit report',
          progress: 'complete',
          pointsGain: '+19',
        },
        {
          order: 1,
          id: 'claim_future_score',
          stepText: 'Claim your FutureScore',
          title: 'Claim Your FutureScore to get your dream credit card',
          progress: 'not_started',
          pointsGain: '+53',
        },
      ],
    },
    {
      order: 1,
      id: 'buy_house',
      progress: 'in_progress',
      goals: [
        {
          order: 0,
          id: 'review_score',
          progress: 'complete',
        },
        {
          order: 1,
          id: 'claim_future_score',
          progress: 'not_started',
        },
        {
          order: 2,
          id: 'down_payment',
          progress: 'complete',
        },
        {
          order: 3,
          id: 'debt_income_ratio',
          progress: 'not_started',
        },
      ],
    },
  ],
};
