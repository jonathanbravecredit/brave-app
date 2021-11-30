import { ICreditMixTLSummary } from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';
//I want to pass in a name of a rule and check some conditions based on the associated rules
// then I want to return if it passes or not.
// I may want to pass back some data as well.
const condition1 = (summary: ICreditMixTLSummary) => {
  return !summary.amountOfClosed && !summary.totalLineAmount;
};
const condition2 = (summary: ICreditMixTLSummary) => {
  return summary.totalLineAmount - summary.amountOfClosed === 1;
};
const condition3 = (summary: ICreditMixTLSummary) => {
  return summary.totalLineAmount - summary.amountOfClosed <= 4;
};

export enum Recommendations {
  Link = '',
  GoodStart = "You're off to a good start on building a strong credit base!",
  GreatStart = "You're off to a great start on building a strong credit base!",
  MakeStronger = 'Make your credit stronger by opening up other credit products. Want to do this without taking on debt? Click here to read our blog on how to do this!',
  SeeProducts = 'Click here to see products from our partners that can help you build your credit or get it back in good shape!',
  NotTooLate = "It's never too late to start building a diversified credit base to help your score!",
}

export enum CreditMixRecommendations {
  NoClosedAndNoOpen = 'no-closed-and-no-open',
  OnlyOneOpen = 'only-one-open',
  TwoToFourOpen = 'two-to-four-open',
}

export const RecommendationConditionalLogic = {
  [CreditMixRecommendations.NoClosedAndNoOpen]: condition1,
  [CreditMixRecommendations.OnlyOneOpen]: condition2,
  [CreditMixRecommendations.TwoToFourOpen]: condition3,
};

export const RecommendationValues = {
  [CreditMixRecommendations.NoClosedAndNoOpen]: {
    link: Recommendations.Link,
    text: Recommendations.NotTooLate,
    subtext: Recommendations.SeeProducts,
  },
  [CreditMixRecommendations.OnlyOneOpen]: {},
  [CreditMixRecommendations.TwoToFourOpen]: {},
};
