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
  Condition7 = `experian`,
}

export const DateBreachCard: Record<any, IBreachCard> = {
  [DataBreaches.Condition1]: {
    reviewed: false,
    subscriber: 'California DMV',
    condition: DataBreaches.Condition1,
    reason: 'Based on your personal information',
    paragraphs: [
      `<p class="mb-5">In February 2021, at least 38 million records from the California DMV were compromised through a billing contractor, Automatic Funds Transfer Services. Information leaked includes 20 months’ worth of CA vehicle registration records such as names, addresses, license place numbers, and vehicle identification numbers (VINS) from at least August 2019.</p>`,
    ],
  },
  [DataBreaches.Condition2]: {
    reviewed: false,
    subscriber: 'University of California',
    condition: DataBreaches.Condition2,
    reason: 'Based on your state of residence',
    paragraphs: [
      `<p class="mb-5">In April 2021, the University of California System had a data leak through its work with the third party company Accelion that affected current and former UC System employees, students, dependents, and applicants. The leaks may include full names, addresses, social security numbers, driver’s license info, and financial information, including bank routing and account numbers, among other data.</p>`,
      `<p class="mb-5">If you haven’t attended a University of California school, this is showing up here since 1/3 of all students in CA attend one of these schools. If you are the parent of a current or former student, you could also be affected</p>`,
    ],
  },
  [DataBreaches.Condition3]: {
    reviewed: false,
    subscriber: 'University of Colorado',
    condition: DataBreaches.Condition3,
    reason: 'Based on your state of residence',
    paragraphs: [
      `<p class="mb-5">In April 2021, the University of Colorado system disclosed a data leak through its work with the third party company Accelion. It affected current and former employees, students, and others, primarily in the Boulder and Denver campuses. The leaks may include personally identifiable information, including addresses, social security numbers, driver’s license info, and demographic data.</p>`,
      `<p class="mb-5">If you haven’t attended a University of Colorado school, this is showing up in case you are the parent of a current or former student, or otherwise in the University of Colorado system (such as a donor or employee, etc.)</p>`,
    ],
  },
  [DataBreaches.Condition4]: {
    reviewed: false,
    subscriber: 'Kroger',
    condition: DataBreaches.Condition4,
    reason: 'Based on your state of residence',
    paragraphs: [
      `<p class="mb-5">On January 2021, Kroger and its family of companies disclosed a data leak through its work with the third party company Accelion. It affected both customers and employees. Impacted data includes some employee HR data, pharmacy records, and some money service records. No credit or debit card information was affected.</p>`,
    ],
  },
  [DataBreaches.Condition5]: {
    reviewed: false,
    subscriber: 'T-Mobile',
    condition: DataBreaches.Condition5,
    reason: 'Based on your inquiries',
    paragraphs: [
      `<p class="mb-5">On August 2017, T-Mobile confirmed that the data of 100 million people was stolen, including customers and non-customers who applied for phones. Leaked information includes physical addresses, Social Security information, driver’s license information, and other data.</p>`,
    ],
  },
  [DataBreaches.Condition6]: {
    reviewed: false,
    subscriber: 'State of Washington',
    condition: DataBreaches.Condition6,
    reason: 'Based on your state of residence',
    paragraphs: [
      `<p class="mb-5">In late December 2020 / January 2021, the state of Washington suffered a data leak through its work with the third party company Accelion which affected around 1.5mm residents, including people who had unemployment benefits through the Employment Security Department from 2017 – 2020. Leaked data includes names, Social Security numbers, birth dates, addresses, and bank account numbers</p>`,
    ],
  },
  [DataBreaches.Condition7]: {
    reviewed: false,
    subscriber: 'Experian',
    condition: DataBreaches.Condition7,
    reason: 'Based on your personal information',
    paragraphs: [
      `<p class="mb-5">On April 2021, a security researcher found that Experian consumer credit scores could be obtained without user consent on lending sites by tinkering with the code. Using publicly-available consumer information, they could force the site to reveal a customer’s credit score. Experian fixed the issue days after it was revealed, but the impact of the flaw is unknown.</p>`,
    ],
  },
};
