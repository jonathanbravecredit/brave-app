import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinePaymentIconComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-icon/tradeline-payment-icon.component';

export default {
  title: 'app/components/tradelines/tradeline-payment-icon',
  component: TradelinePaymentIconComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<TradelinePaymentIconComponent> = (args: any) => ({
  component: TradelinePaymentIconComponent,
  props: {
    ...args,
  },
});

export const Late = Template.bind({});
Late.args = {
  code: '1',
};

export const Collection = Template.bind({});
Collection.args = {
  code: '9',
};

export const Unknown = Template.bind({});
Unknown.args = {
  code: 'U',
};

export const Current = Template.bind({});
Current.args = {
  code: 'C',
};

export const Other = Template.bind({});
Other.args = {
  code: '8R',
};
