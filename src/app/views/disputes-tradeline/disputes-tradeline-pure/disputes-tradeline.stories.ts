import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesTradelinePureView } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

export default {
  title: 'app/views/disputes/tradeline',
  component: DisputesTradelinePureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const dispute: IDisputeItem = {
  tradeline: {},
  creditorName: 'ABC Collectinos',
  lastReported: '1990-01-01',
  accountTypeDescription: 'Example Type',
  accountTypeDescriptionValue: 'Example Type',
  originalCreditor: 'Original Creditor',
  originalCreditorValue: 'XYZ comp',
  disputeFlag: 'Dispute Flag',
  disputeFlagValue: 'No',
  accountDetail: {
    accountNumber: '123XXXX',
    typeOfCollection: 'Past Dues',
    amountPastDue: 0,
    dateOpened: '1990-01-01',
    dateLastPayment: '1990-03-01',
    remarks: 'abc',
  },
};
const Template: Story<DisputesTradelinePureView> = (args: any) => ({
  component: DisputesTradelinePureView,
  props: {
    ...args,
    dispute,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Reasons = Template.bind({});
Reasons.args = {
  initialStepId: 'reason',
  initialDisputeType: 'inaccurate',
};

export const Summary = Template.bind({});
Summary.args = {
  initialStepId: 'summary',
};

export const Success = Template.bind({});
Success.args = {
  isDisputeSent: true,
};
