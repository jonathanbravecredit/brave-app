import { AccountTypes } from '@shared/constants/account-types';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';

export const FORBEARANCE_TYPE: Record<any, boolean> = {
  i: true,
  m: true,
};

export enum ReportPartitions {
  TradelineItem = 'tradelineitem',
  PersonalItem = 'personalitem',
  PublicItem = 'publicitem',
}

export enum DataBreaches {
  None = `none`,
  Condition1 = `california-dmv`,
  Condition2 = `university-california`,
  Condition3 = `university-colorado`,
  Condition4 = `kroger-customer`,
  Condition5 = `tmobile-customer`,
  Condition6 = `state-washington`,
}

export const DateBreachCard: Record<any, IBreachCard> = {
  [DataBreaches.Condition1]: {
    subscriber: 'California DMV',
    reason: 'Based on your personal information',
    paragraphs: [
      `<p class="mb-5"> In February 2021, at least 38 million records from the California DMV were compromised through a billing contractor, Automatic Funds Transfer Services. Information leaked includes 20 months’ worth of CA vehicle registration records such as names, addresses, license place numbers, and vehicle identification numbers (VINS) from at least August 2019.</p>`,
    ],
  },
  [DataBreaches.Condition2]: {
    subscriber: 'University of California',
    reason: 'Based on your state of residence',
    paragraphs: [
      `<p class="mb-5">In April 2021, the University of California System had a data leak through its work with the third party company Accelion that affected current and former UC System employees, students, dependents, and applicants. The leaks may include full names, addresses, social security numbers, driver’s license info, and financial information, including bank routing and account numbers, among other data.</p>`,
      `<p class="mb-5">If you haven’t attended a University of California school, this is showing up here since 1/3 of all students in CA attend one of these schools. If you are the parent of a current or former student, you could also be affected</p>`,
    ],
  },
  [DataBreaches.Condition3]: {
    subscriber: 'University of Colorado',
    reason: 'Based on your state of residence',
    paragraphs: [`<p class="mb-5"> TBD </p>`],
  },
  [DataBreaches.Condition4]: {
    subscriber: 'Kroger',
    reason: 'Based on your state of residence',
    paragraphs: [`<p class="mb-5"> TBD </p>`],
  },
  [DataBreaches.Condition5]: {
    subscriber: 'T-Mobile',
    reason: 'Based on your inquiries',
    paragraphs: [
      `<p class="mb-5">On August 2017, T-Mobile confirmed that the data of 100 million people was stolen, including customers and non-customers who applied for phones. Leaked information includes physical addresses, Social Security information, driver’s license information, and other data.</p>`,
      `<p class="mb-5">If you think you were affected, first <a href="https://www.transunion.com/credit-disputes/dispute-your-credit">review your credit report</a> for accounts you don’t recognize on Brave Credit. If you see something you don’t recognize you can dispute the information, or <a href="https://www.transunion.com/credit-freeze">put a credit freeze</a> on your credit report for all bureaus</p>`,
    ],
  },
  [DataBreaches.Condition6]: {
    subscriber: 'State of Washington',
    reason: 'Based on your state of residence',
    paragraphs: [
      `<p class="mb-5">In late December 2020 / January 2021, the state of Washington suffered a data leak through its work with the third party company Accelion which affected around 1.5mm residents, including people who had unemployment benefits through the Employment Security Department from 2017 – 2020. Leaked data includes names, Social Security numbers, birth dates, addresses, and bank account numbers</p>`,
    ],
  },
};
