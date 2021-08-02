import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelineDetailsComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/tradeline-details.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';

export default {
  title: 'app/components/tradelines/tradeline-details',
  component: TradelineDetailsComponent,
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

const revolving: ITradelineDetailsConfig = {
  dateOpened: '2020-01-10',
  accountDesignator: 'James Credit',
  late60Count: '10',
  amountPastDue: 1200,
  disputeFlag: 'No',
} as ITradelineDetailsConfig;
const installment: ITradelineDetailsConfig = {
  dateOpened: '2019-01-01',
  accountDesignator: 'James Credit',
  termMonths: '48',
  late90Count: '3',
  amountPastDue: '950',
  disputeFlag: 'No',
} as ITradelineDetailsConfig;

const collections: ITradelineDetailsConfig = {
  originalCreditor: 'ABC Financing',
  creditType: 'Collection',
  dateOpened: '2018-01-01',
  disputeFlag: 'No',
} as ITradelineDetailsConfig;

const remarks = `This account was investigated two weeks ago per the client's request`;
const address = '123 Main Street, Hollywood, CA';

const Template: Story<TradelineDetailsComponent> = (args: any) => ({
  component: TradelineDetailsComponent,
  props: {
    ...args,
    remarks: remarks,
    address: address,
  },
});

export const Revolving = Template.bind({});
Revolving.args = {
  config: revolving,
};

export const Installment = Template.bind({});
Installment.args = {
  config: installment,
};

export const Collections = Template.bind({});
Collections.args = {
  config: collections,
};
