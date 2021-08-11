import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/snapshots/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';

export default {
  title: 'app/views/negative-account/initial',
  component: NegativeAccountInitialPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const cards: INegativeAccountCardInputs[] = [
  {
    creditorName: 'ABC Collections',
    lastReported: '2020-01-01',
    accountTypeDescription: 'Collections Account',
    accountTypeDescriptionValue: 'Open',
    originalCreditor: 'Original Creditor',
    originalCreditorValue: 'Loans R Us',
    disputeFlag: 'Previously Disputed',
    disputeFlagValue: 'No',
    accountDetail: {
      accountNumber: '12345678',
      typeOfCollection: 'Collections',
      amountPastDue: '700',
      dateOpened: '2017-01-01',
      consumerStatement: '',
      dateLastPayment: '2019-01-01',
    },
  } as INegativeAccountCardInputs,
  {
    creditorName: 'XYZ Collections',
    lastReported: '2020-01-01',
    accountTypeDescription: 'Collections Account',
    accountTypeDescriptionValue: 'Open',
    originalCreditor: 'Original Creditor',
    originalCreditorValue: 'Loans R Us',
    disputeFlag: 'Previously Disputed',
    disputeFlagValue: 'No',
    accountDetail: {
      accountNumber: '12345678',
      typeOfCollection: 'Collections',
      amountPastDue: '700',
      dateOpened: '2017-01-01',
      consumerStatement: '',
      dateLastPayment: '2019-01-01',
    },
  } as INegativeAccountCardInputs,
];
const Template: Story<NegativeAccountInitialPureComponent> = (args: any) => ({
  component: NegativeAccountInitialPureComponent,
  props: {
    ...args,
    cards,
  },
});

export const Default = Template.bind({});
Default.args = {};
