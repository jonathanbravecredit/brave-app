import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { INegativeAccountCardInputs, NegativeAccountCardComponent } from '@shared/components/cards/negative-account-card/negative-account-card.component';

export default {
  title: 'app/components/cards/negative-account',
  component: NegativeAccountCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const data: INegativeAccountCardInputs = {
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
    dateLastPayment: '04/21/2018'
  }
};

const Template: Story<NegativeAccountCardComponent> = (args: any) => ({
  component: NegativeAccountCardComponent,
  props: {
    ...args,
    data
  },
});

export const Default = Template.bind({});
Default.args = {};
