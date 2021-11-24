import { APP_BASE_HREF, CurrencyPipe } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationCardComponent } from "./credit-utilization-card.component";
import { AccountStatusPipe } from "./account-status.pipe";
import { ITradelineDetailsConfig } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces";
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { TradelineToDetailsPipe } from "@shared/pipes/tradeline-to-details/tradeline-to-details.pipe";
import { ITradeLinePartition } from "@shared/interfaces";
import { ICreditUtilization } from "./interfaces";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-card",
  component: CreditUtilizationCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [AccountStatusPipe],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<CreditUtilizationCardComponent> = (args: any) => ({
  component: CreditUtilizationCardComponent,
  props: {
    ...args,
  },
});

const testPartition = {
  accountTypeAbbreviation: "Revolving",
  accountTypeDescription: "Revolving Account",
  accountTypeSymbol: "R",
  Tradeline: {
    PayStatus: {
      symbol: 1,
      description: "Late 30 Days",
      rank: 105,
      abbreviation: "30 Delinq",
    },
    creditorName: "HRSI BANK-WHIRL",
    IndustryCode: {
      symbol: "B",
      description: "Bank",
      rank: 199,
      abbreviation: "Bank",
    },
    GrantedTrade: {
      PayStatusHistory: {
        MonthlyPayStatus: [
          {
            date: "1999-07-01",
            status: 1,
          },
          {
            date: "1999-06-01",
            status: "C",
          },
          {
            date: "1999-05-01",
            status: 1,
          },
          {
            date: "1999-03-31",
            status: "C",
          },
          {
            date: "1999-02-28",
            status: "C",
          },
          {
            date: "1999-01-31",
            status: 1,
          },
          {
            date: "1998-12-31",
            status: "C",
          },
          {
            date: "1998-11-30",
            status: "C",
          },
          {
            date: "1998-10-31",
            status: "C",
          },
          {
            date: "1998-10-01",
            status: "C",
          },
          {
            date: "1998-09-01",
            status: "C",
          },
          {
            date: "1998-08-01",
            status: "C",
          },
          {
            date: "1998-07-01",
            status: "C",
          },
          {
            date: "1998-06-01",
            status: "C",
          },
          {
            date: "1998-05-01",
            status: "C",
          },
          {
            date: "1998-03-31",
            status: "C",
          },
          {
            date: "1998-02-28",
            status: "C",
          },
          {
            date: "1998-01-31",
            status: "C",
          },
          {
            date: "1997-12-31",
            status: 1,
          },
          {
            date: "1997-11-30",
            status: "C",
          },
          {
            date: "1997-10-31",
            status: "C",
          },
          {
            date: "1997-10-01",
            status: "",
          },
          {
            date: "1997-09-01",
            status: "",
          },
          {
            date: "1997-08-01",
            status: "",
          },
        ],
        startDate: "1999-07-01",
        status: "1C1CC1CCCCCCCCCCCC1CC",
      },
      CreditLimit: 110,
      worstPatStatusCount: 23,
      PaymentFrequency: {
        symbol: "",
        description: "",
        rank: 100000,
        abbreviation: "",
      },
      late90Count: 0,
      late60Count: 0,
      dateLastPayment: "1999-05-01",
      AccountType: {
        symbol: "CH",
        description: "Charge account",
        rank: 50,
        abbreviation: "Charge account",
      },
      TermType: {
        symbol: "P",
        description: "Provided",
        rank: 199,
        abbreviation: "Provided",
      },
      monthlyPayment: 20,
      termMonths: 0,
      WorstPayStatus: {
        symbol: 1,
        description: "Late 30 Days",
        rank: 105,
        abbreviation: "30 Delinq",
      },
      monthsReviewed: 23,
      collateral: "",
      amountPastDue: 20,
      CreditType: {
        symbol: "R",
        description: "Revolving Account",
        rank: 50,
        abbreviation: "Revolving",
      },
      late30Count: 4,
    },
    currentBalance: 276,
    subscriberCode: "0235197E",
    handle: "TR01_-451755518_691610874_82",
    dateAccountStatus: "1999-07-01",
    accountNumber: 15905771999,
    DisputeFlag: {
      symbol: "F",
      description: "Account not disputed",
      rank: 199,
      abbreviation: "Account not disputed",
    },
    Source: {
      InquiryDate: "1999-07-28",
      Reference: "bdd1b720-0ccc-4562-8a5",
      BorrowerKey: "",
      Bureau: {
        symbol: "TUC",
        description: "TransUnion",
        rank: 1,
        abbreviation: "TransUnion",
      },
    },
    OpenClosed: {
      symbol: "O",
      description: "Open",
      rank: 199,
      abbreviation: "Open",
    },
    highBalance: 364,
    dateOpened: "1997-08-01",
    dateReported: "1999-07-01",
    VerificationIndicator: {
      symbol: "F",
      description: "Account not disputed",
      rank: 199,
      abbreviation: "Account not disputed",
    },
    position: 0,
    dateVerified: "1999-07-01",
    bureau: "TransUnion",
    AccountDesignator: {
      symbol: "I",
      description: "Individual",
      rank: 199,
      abbreviation: "Individual",
    },
    AccountCondition: {
      symbol: "O",
      description: "Open",
      rank: 60,
      abbreviation: "Open",
    },
  },
} as ITradeLinePartition;

const config =
  new TradelineToDetailsPipe().transform(testPartition) ||
  ({} as ITradelineDetailsConfig);

const tradeLineParseMock: ICreditUtilization = {
  config,
  creditorName: "CITI",
  creditLimit: '0',
  currentBalance: 5000,
};

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {
  creditUtilizationType: "credit-utilization",
  creditUtilization: tradeLineParseMock,
  open: true,
};
