import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TradeAccountSummaryPureComponent } from '@views/trade-account-summary/trade-account-summary-pure/trade-account-summary-pure.component';

export default {
  title: 'app/views/tradelines/account-summary',
  component: TradeAccountSummaryPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<TradeAccountSummaryPureComponent> = (args: any) => ({
  component: TradeAccountSummaryPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
