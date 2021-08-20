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
      imports: [],
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

export const TooNew = Template.bind({});
TooNew.args = {
  code: '0',
};

export const Late30 = Template.bind({});
Late30.args = {
  code: '1',
};

export const Late60 = Template.bind({});
Late60.args = {
  code: '2',
};
export const Late90 = Template.bind({});
Late90.args = {
  code: '3',
};
export const Late120 = Template.bind({});
Late120.args = {
  code: '4',
};

export const WageEarner = Template.bind({});
WageEarner.args = {
  code: '7',
};

export const Collection = Template.bind({});
Collection.args = {
  code: '9',
};

export const Unknown = Template.bind({});
Unknown.args = {
  code: 'U',
};

export const Blank = Template.bind({});
Blank.args = {
  code: '',
};

export const Current = Template.bind({});
Current.args = {
  code: 'C',
};

export const Other = Template.bind({});
Other.args = {
  code: '8R',
};
