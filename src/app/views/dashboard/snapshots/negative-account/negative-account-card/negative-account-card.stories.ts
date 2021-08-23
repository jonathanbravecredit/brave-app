import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountCardComponent } from '@views/dashboard/snapshots/negative-account/negative-account-card/negative-account-card.component';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';
import {
  REVOLVING_PARTITION,
  REVOLVING_SUBSCRIBER,
} from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/mocks';

export default {
  title: 'app/components/cards/negative-account',
  component: NegativeAccountCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`),
  ],
} as Meta;

const data = {
  tradeline: REVOLVING_PARTITION,
  subscriber: REVOLVING_SUBSCRIBER,
  creditorName: 'Negative Nelly',
  lastReported: '2020-01-01',
  accountTypeDescription: 'Revolving',
  accountTypeDescriptionValue: 'Predators R Us',
  originalCreditor: 'Original Creditor',
  originalCreditorValue: 'Bank of America',
  disputeFlag: 'Previously Disputed',
  disputeFlagValue: 'No',
  consumerStatement: 'None',
} as INegativeAccountCardInputs;

const Template: Story<NegativeAccountCardComponent> = (args: any) => ({
  component: NegativeAccountCardComponent,
  props: {
    ...args,
    data,
  },
});

export const Default = Template.bind({});
Default.args = {};
