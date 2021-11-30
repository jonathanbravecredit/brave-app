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
  Link = 'https://learn.self.inc/lpg/click-through/credit-builder-education-credit-card/?affiliate_partner=Bulldog%20Media%20Group&irgwc=1&irclickid=yB12CQ130xyIRHnyqjWYSydRUkG2Ph1p1VLCXg0&utm_source=impact_radius&utm_medium=affiliate&utm_campaign=Bulldog%20Media%20Group&utm_content=Self%20-%20Credit%20Card%20%2B%20Credit%20Builder%20Combo%20Page&media_partner1=&media_partner2=&media_parter3=&ad_name=Self%20-%20Credit%20Card%20%2B%20Credit%20Builder%20Combo%20Page&ad_type=TEXT_LINK&media_partner_id=70161&campaign_id=10159&media_partner_type=mediapartner&click_time_unix=1638237272355&subid1=N4P567_19805&subid2=&subid3=&sharedid=N4P567_19805&ircid=10159',
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
