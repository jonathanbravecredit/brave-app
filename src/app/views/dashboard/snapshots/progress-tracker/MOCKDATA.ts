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
      titleText: 'Your plan to get a credit card:',
      goals: [
        {
          order: 0,
          id: 'review_report',
          stepText: 'Review your report',
          progress: 'complete',
        },
        {
          order: 1,
          id: 'claim_future_score',
          stepText: 'Claim your FutureScore',
          progress: 'not_started',
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
}
