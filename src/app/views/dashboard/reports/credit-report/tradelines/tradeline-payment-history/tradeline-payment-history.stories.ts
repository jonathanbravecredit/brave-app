import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-history/tradeline-payment-history.component';

export default {
  title: 'app/components/tradelines/tradeline-payment-history',
  component: TradelinePaymentHistoryComponent,
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

const Template: Story<TradelinePaymentHistoryComponent> = (args: any) => ({
  component: TradelinePaymentHistoryComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
