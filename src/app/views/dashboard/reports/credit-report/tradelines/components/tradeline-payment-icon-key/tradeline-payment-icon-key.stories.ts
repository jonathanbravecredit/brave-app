import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinePaymentIconKeyComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-icon-key/tradeline-payment-icon-key.component';
import { DashboardModule } from '@views/dashboard/dashboard.module';

export default {
  title: 'app/components/tradelines/tradeline-payment-icon-key',
  component: TradelinePaymentIconKeyComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, DashboardModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">
                ${story}
              </div>`;
    }),
  ],
} as Meta;

const Template: Story<TradelinePaymentIconKeyComponent> = (args: any) => ({
  component: TradelinePaymentIconKeyComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  showModal: true,
  config: {
    title: 'Payment/Remarks Key',
    enableButtonOne: false,
    enableButtonTwo: false,
  },
};
Default.parameters;
