import { APP_BASE_HREF, CurrencyPipe } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CreditUtilizationPureView } from "./credit-utilization-pure.view";
import { CreditUtilizationInfoComponent } from "../components/credit-utilization-info/credit-utilization-info.component";
import { CreditUtilizationHeaderComponent } from "../components/credit-utilization-header/credit-utilization-header.component";
import { CreditUtilizationCardComponent } from "../components/credit-utilization-card/credit-utilization-card.component";
import { CreditUtilizationTotalComponent } from "../components/credit-utilization-total/credit-utilization-total.component";
import { CreditUtilizationPercentagesComponent } from "../components/credit-utilization-percentages/credit-utilization-percentages.component";
import { PercentageBadgeComponent } from "@shared/components/badges/percentage-badge/percentage-badge.component";
import { CreditUtilizationAvailableComponent } from "../components/credit-utilization-available/credit-utilization-available.component";
import { AccountStatusPipe } from "../components/credit-utilization-card/account-status.pipe";
import { ViewdetailButtonComponent } from "@shared/components/buttons/viewdetail-button/viewdetail-button.component";
import { TradelineToDetailsPipe } from "@shared/pipes/tradeline-to-details/tradeline-to-details.pipe";
import { CreditUtilizationNoCardsHeaderComponent } from "../components/credit-utilization-no-cards-header/credit-utilization-no-cards-header.component";
import { CreditUtilizationNoCardsTextComponent } from "../components/credit-utilization-no-cards-text/credit-utilization-no-cards-text.component";
import { ITradeLinePartition } from "@shared/interfaces";
import { ITradelineDetailsConfig } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces";
import { ICreditUtilization } from "../components/credit-utilization-card/interfaces";

export default {
  title: "app/views/snapshots/credit-utilization",
  component: CreditUtilizationPureView,
  decorators: [
    moduleMetadata({
      declarations: [
        CreditUtilizationInfoComponent,
        CreditUtilizationHeaderComponent,
        CreditUtilizationCardComponent,
        CreditUtilizationTotalComponent,
        CreditUtilizationPercentagesComponent,
        PercentageBadgeComponent,
        CreditUtilizationAvailableComponent,
        AccountStatusPipe,
        ViewdetailButtonComponent,
        TradelineToDetailsPipe,
        CreditUtilizationNoCardsHeaderComponent,
        CreditUtilizationNoCardsTextComponent,
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md" style="min-width: 320px">
            <div class="p-2">
              <div class="my-2">
              ${story}
              </div>
            </div>
          </div>
        </section>
      </main>`;
    }),
  ],
} as Meta;

// const cards = [
// ];

const Template: Story<CreditUtilizationPureView> = (args: any) => ({
  component: CreditUtilizationPureView,
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
  config: config,
  creditorName: "CITI",
  creditLimit: 10000,
  currentBalance: 5000,
  openClosed: "O",
};

const tradeLineParseMock2: ICreditUtilization = {
  config: config,
  creditorName: "CITI",
  creditLimit: 5001,
  currentBalance: 5000,
  openClosed: "O",
};

const tradeLineParseMock3: ICreditUtilization = {
  config: config,
  creditorName: "CITI",
  creditLimit: 25000,
  currentBalance: 5000,
  openClosed: "C",
};

export const Default = Template.bind({});
Default.args = {
  creditAcounts: [tradeLineParseMock, tradeLineParseMock2, tradeLineParseMock3],
};
Default.parameters;

export const NoCards = Template.bind({});
NoCards.args = {};
NoCards.parameters;
