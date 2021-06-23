import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import {
  ICollectionsTradelineDetails,
  IInstallmentTradelineDetails,
  IRevolvingTradelineDetails,
  TradelineDetailsComponent,
} from '@shared/components/tradelines/tradeline-details/tradeline-details.component';

export default {
  title: 'app/components/tradelines/tradeline-details',
  component: TradelineDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<Partial<TradelineDetailsComponent>> = (args: any) => ({
  component: TradelineDetailsComponent,
  props: {
    ...args,
  },
  template: `
    <div class="container mx-auto max-w-xs h-full">
      <brave-tradeline-details
      ></brave-tradeline-details>
    </div>`,
});

const revolving: IRevolvingTradelineDetails = {
  dateOpened: '2020-01-10',
  accountDesignator: 'James Credit',
  late60Count: '10',
  amountPastDue: 1200,
  disputeFlag: 'No',
};
const installment: IInstallmentTradelineDetails = {
  dateOpened: '2019-01-01',
  accountDesignator: 'James Credit',
  termMonths: '48',
  late90Count: '3',
  amountPastDue: '950',
  disputeFlag: 'No',
};

const collections: ICollectionsTradelineDetails = {
  originalCreditor: 'ABC Financing',
  creditType: 'Collection',
  dateOpened: '2018-01-01',
  disputeFlag: 'No',
};

export const Revolving = Template.bind({});
Revolving.args = {
  ...revolving,
};

export const Installment = Template.bind({});
Installment.args = {
  ...installment,
};

export const Collections = Template.bind({});
Collections.args = {
  ...collections,
};
