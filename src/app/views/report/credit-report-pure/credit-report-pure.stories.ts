import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { mockCreditReports as mock } from '../credit-report/constants';
import {
  CreditReportPureComponent,
  ICreditReportTradelinesCardGroup,
} from '@views/report/credit-report-pure/credit-report-pure.component';
import { PreferencesStateModel } from '@store/preferences';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';

export default {
  title: 'app/views/creditreport/credit-report',
  component: CreditReportPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const creditReports: ICreditReportTradelinesCardGroup[] = [
  {
    title: 'Credit Cards',
    group: CreditReportGroups.CreditCards,
    cards: [
      {
        type: 'c',
        creditorName: 'ABC Financial',
        isOpen: true,
        firstFieldName: 'Current Balance',
        firstFieldValue: '1,200',
        secondFieldName: 'Credit Limit',
        secondFieldValue: '1,200',
        thirdFieldName: 'Payment Status',
        thirdFieldValue: 'Paid',
        status: '',
      } as ICreditReportCardInputs,
      {
        type: 'c',
        creditorName: 'XYZ Financial',
        isOpen: true,
        firstFieldName: 'Current Balance',
        firstFieldValue: '200',
        secondFieldName: 'Credit Limit',
        secondFieldValue: '200',
        thirdFieldName: 'Payment Status',
        thirdFieldValue: 'Paid',
        status: '',
      } as ICreditReportCardInputs,
    ],
  },
  {
    title: 'Collection Accounts',
    group: CreditReportGroups.CollectionsAccounts,
    cards: [
      {
        type: 'c',
        creditorName: 'ABC Services',
        isOpen: true,
        firstFieldName: 'Current Balance',
        firstFieldValue: '1,200',
        secondFieldName: 'Credit Limit',
        secondFieldValue: '1,200',
        thirdFieldName: 'Payment Status',
        thirdFieldValue: 'Paid',
        status: '',
      } as ICreditReportCardInputs,
    ],
  },
];
const preferences: PreferencesStateModel = {
  showAllAccounts: {
    [CreditReportGroups.CreditCards]: true,
    [CreditReportGroups.CollectionsAccounts]: true,
    [CreditReportGroups.InstallmentLoans]: true,
    [CreditReportGroups.Mortgages]: true,
  },
};
const Template: Story<CreditReportPureComponent> = (args: any) => ({
  component: CreditReportPureComponent,
  props: {
    ...args,
    creditReports: creditReports,
    preferences: preferences,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
