import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import {
  REVOLVING_PARTITION,
  REVOLVING_SUBSCRIBER,
} from '@views/dashboard/negative-account/negative-account-initial-pure/mocks';

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

// const cards: INegativeAccountCardInputs[] = [
// {
//   tradeline: REVOLVING_PARTITION,
//   subscriber: REVOLVING_SUBSCRIBER,
//   creditorName: 'Negative Nelly',
//   lastReported: '2020-01-01',
//   accountTypeDescription: 'Revolving',
//   accountTypeDescriptionValue: 'Predators R Us',
//   originalCreditor: 'Original Creditor',
//   originalCreditorValue: 'Bank of America',
//   disputeFlag: 'Previously Disputed',
//   disputeFlagValue: 'No',
//   consumerStatement: 'None',
// } as INegativeAccountCardInputs,
// {
//   tradeline: REVOLVING_PARTITION,
//   subscriber: REVOLVING_SUBSCRIBER,
//   creditorName: 'Negative Nelly Two',
//   lastReported: '2020-01-01',
//   accountTypeDescription: 'Revolving',
//   accountTypeDescriptionValue: 'Loans R Us',
//   originalCreditor: 'Original Creditor',
//   originalCreditorValue: 'Bank of America',
//   disputeFlag: 'Previously Disputed',
//   disputeFlagValue: 'No',
//   consumerStatement: 'None',
// } as INegativeAccountCardInputs,
// ];
const Template: Story<NegativeAccountInitialPureComponent> = (args: any) => ({
  component: NegativeAccountInitialPureComponent,
  props: {
    ...args,
    // cards,
  },
});

export const Default = Template.bind({});
Default.args = {};
