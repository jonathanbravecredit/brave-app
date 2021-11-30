import { ICreditMixTLSummary } from "@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface";
//I want to pass in a name of a rule and check some conditions based on the associated rules
// then I want to return if it passes or not.
// I may want to pass back some data as well.
const condition1 = (summary: ICreditMixTLSummary) => {
  console.log('TESTTEST', !summary.amountOfClosed && !summary.totalLineAmount)
  return !summary.amountOfClosed && !summary.totalLineAmount;
};
const condition2 = (summary: ICreditMixTLSummary) => {
  return summary.totalLineAmount - summary.amountOfClosed === 1;
};
const condition3 = (summary: ICreditMixTLSummary) => {
  return summary.totalLineAmount - summary.amountOfClosed <= 4;
};
const condition4 = (summary: ICreditMixTLSummary) => {
  return (
    summary.creditCardAmount >= 5 &&
    summary.autoLoanAmount &&
    summary.studentLoanAmount &&
    summary.mortgageAmount
  );
};
const condition5 = (summary: ICreditMixTLSummary) => {
  return summary.totalLineAmount === summary.amountOfClosed;
};
const condition6 = (summary: ICreditMixTLSummary) => {
  return (
    summary.totalLineAmount - summary.amountOfClosed <= 7 &&
    (summary.studentLoanAmount || summary.autoLoanAmount) &&
    !summary.mortgageAmount
  );
};
const condition7 = (summary: ICreditMixTLSummary) => {
  return (
    summary.totalLineAmount - summary.amountOfClosed <= 7 &&
    (summary.studentLoanAmount ||
      summary.autoLoanAmount ||
      summary.mortgageAmount)
  );
};
const condition8 = (summary: ICreditMixTLSummary) => {
  return (
    summary.totalLineAmount - summary.amountOfClosed >= 8 &&
    summary.creditCardAmount &&
    summary.autoLoanAmount &&
    summary.mortgageAmount
  );
};

export enum Recommendations {
  Link = "https://learn.self.inc/lpg/click-through/credit-builder-education-credit-card/?affiliate_partner=Bulldog%20Media%20Group&irgwc=1&irclickid=yB12CQ130xyIRHnyqjWYSydRUkG2Ph1p1VLCXg0&utm_source=impact_radius&utm_medium=affiliate&utm_campaign=Bulldog%20Media%20Group&utm_content=Self%20-%20Credit%20Card%20%2B%20Credit%20Builder%20Combo%20Page&media_partner1=&media_partner2=&media_parter3=&ad_name=Self%20-%20Credit%20Card%20%2B%20Credit%20Builder%20Combo%20Page&ad_type=TEXT_LINK&media_partner_id=70161&campaign_id=10159&media_partner_type=mediapartner&click_time_unix=1638237272355&subid1=N4P567_19805&subid2=&subid3=&sharedid=N4P567_19805&ircid=10159",

  NotTooLate = "It's never too late to start building a diversified credit base to help your score!",
  GoodStart = "You're off to a good start on building a strong credit base!",
  GreatStart = "You're off to a great start on building a strong credit base!",
  GreatBut = "You have a great credit base but there's a few easy things that can make it even better!",
  GoodBut = "You have a good credit base, but keeping some accounts open could help you in the future!",
  Fantastic = "You're doing a fantastic job managing a variety of credit types!",
  GreatJob = "Great job managing a variety of credit types!",
  ExceptionalJob = "You're doing an exceptional job managing your credit mix!",

  SeeProducts = "Click here to see products from our partners that can help you build your credit or get it back in good shape!",
  MakeStronger = "Make your credit stronger by opening up other credit products. Want to do this without taking on debt? Click here to learn how to do this!",
  HavingMore = "Having more than credit cards could help you show lenders you can manage a variety of credit types. Click to learn about an easy way to do this while saving for a house or car!",
  ForExample = "For example, if you have a credit card you won't use any more, keeping it open can help your score, even if you don't use it!",
  MakeSure = "Make sure to keep making on-time payments and keeping your utilization low on any credit cards!",
  HouseGoal = "If your goal is to buy a house, click here for a way to continue to building a stronger credit base and score while helping you save for a down payment!",
  ToHelp = "To help your score, remember that keeping credit cards you don't use open, even if you don't use it, increases your credit age and mix!",

  ratingPoor = "Poor",
  poorColor = "#F56700",
  ratingFair = "Fair",
  fairColor = "#F59300",
  ratingGood = "Good",
  goodColor = "#BBD904",
  ratingExcellent = "Excellent",
  excellentColor = "#4BD269",
}

export enum CreditMixRecommendations {
  NoClosedAndNoOpen = "no-closed-and-no-open",
  OnlyOneOpen = "only-one-open",
  TwoToFourOpen = "two-to-four-open",
  FivePlusOnlyCC = "five-plus-only-cc",
  AllClosed = "all-closed",
  SevenOrLessNoMortgage = "seven-or-less-no-mortgage",
  SevenOrLess = "seven-or-less",
  EightOrMoreAtLeastOneOfAll = "eight-or-more-at-least-one-of-all",
}

export const RecommendationConditionalLogic = {
  [CreditMixRecommendations.NoClosedAndNoOpen]: condition1,
  [CreditMixRecommendations.OnlyOneOpen]: condition2,
  [CreditMixRecommendations.TwoToFourOpen]: condition3,
  [CreditMixRecommendations.FivePlusOnlyCC]: condition4,
  [CreditMixRecommendations.AllClosed]: condition5,
  [CreditMixRecommendations.SevenOrLessNoMortgage]: condition6,
  [CreditMixRecommendations.SevenOrLess]: condition7,
  [CreditMixRecommendations.EightOrMoreAtLeastOneOfAll]: condition8,
};

export const RecommendationValues = {
  [CreditMixRecommendations.NoClosedAndNoOpen]: {
    link: Recommendations.Link,
    text: Recommendations.NotTooLate,
    subtext: Recommendations.SeeProducts,
    rating: Recommendations.ratingPoor,
    color: Recommendations.poorColor,
  },
  [CreditMixRecommendations.OnlyOneOpen]: {
    link: Recommendations.Link,
    text: Recommendations.GoodStart,
    subtext: Recommendations.MakeStronger,
    rating: Recommendations.ratingPoor,
    color: Recommendations.poorColor,
  },
  [CreditMixRecommendations.TwoToFourOpen]: {
    link: Recommendations.Link,
    text: Recommendations.GreatStart,
    subtext: Recommendations.MakeStronger,
    rating: Recommendations.ratingFair,
    color: Recommendations.fairColor,
  },
  [CreditMixRecommendations.FivePlusOnlyCC]: {
    link: Recommendations.Link,
    text: Recommendations.GreatBut,
    subtext: Recommendations.HavingMore,
    rating: Recommendations.ratingFair,
    color: Recommendations.fairColor,
  },
  [CreditMixRecommendations.AllClosed]: {
    link: Recommendations.Link,
    text: Recommendations.GoodBut,
    subtext: Recommendations.ForExample,
    rating: Recommendations.ratingFair,
    color: Recommendations.fairColor,
  },
  [CreditMixRecommendations.SevenOrLessNoMortgage]: {
    link: Recommendations.Link,
    text: Recommendations.Fantastic,
    subtext: Recommendations.MakeSure,
    rating: Recommendations.ratingGood,
    color: Recommendations.goodColor,
  },
  [CreditMixRecommendations.SevenOrLess]: {
    link: Recommendations.Link,
    text: Recommendations.GreatJob,
    subtext: Recommendations.HouseGoal,
    rating: Recommendations.ratingGood,
    color: Recommendations.goodColor,
  },
  [CreditMixRecommendations.EightOrMoreAtLeastOneOfAll]: {
    link: Recommendations.Link,
    text: Recommendations.ExceptionalJob,
    subtext: Recommendations.ToHelp,
    rating: Recommendations.ratingExcellent,
    color: Recommendations.excellentColor,
  },
};
