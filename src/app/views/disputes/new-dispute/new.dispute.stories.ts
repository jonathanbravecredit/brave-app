import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NewDisputeComponent } from './new-dispute.component';
import { NewDisputePureComponent } from '../new-dispute-pure/new-dispute-pure.component';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';

export default {
  title: 'app/views/disputes/new-dispute',
  component: NewDisputeComponent,
  decorators: [
    moduleMetadata({
      declarations: [NewDisputePureComponent],
      imports: [SharedComponentsModule, HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const data = {
  creditorName: 'A.R.M. Solutions',
  lastReported: '29/09/2020',
  accountTypeDescription: '90-Day Late Payment',
  accountTypeDescriptionValue: 'Open',
  originalCreditor: 'Original Creditor',
  originalCreditorValue: 'Bank Of America',
  disputeFlag: 'Previously Disputed?',
  disputeFlagValue: 'No',
  accountDetail: {
    accountNumber: '066611222',
    typeOfCollection: 'Collections',
    amountPastDue: 700,
    dateOpened: '04/12/2018',
    dateLastPayment: '04/21/2018',
  },
} as INegativeAccountCardInputs;

const Template: Story<NewDisputeComponent> = (args: any) => ({
  component: NewDisputeComponent,
  props: {
    ...args,
    newDisputeData: data,
  },
});

export const Default = Template.bind({});
Default.args = {};
