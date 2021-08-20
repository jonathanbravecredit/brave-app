import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinePaymentsComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payments/tradeline-payments.component';

export default {
  title: 'app/components/tradelines/tradeline-payments',
  component: TradelinePaymentsComponent,
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

const remarks = `This account was investigated two weeks ago per the client's request`;
const address = '123 Main Street, Hollywood, CA';
const Template: Story<TradelinePaymentsComponent> = (args: any) => ({
  component: TradelinePaymentsComponent,
  props: {
    ...args,
    remarks: remarks,
    address: address,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
