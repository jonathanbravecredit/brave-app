import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinePaymentsComponent } from '@shared/components/tradelines/tradeline-payments/tradeline-payments.component';

export default {
  title: 'app/components/tradelines/tradeline-payments',
  component: TradelinePaymentsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<TradelinePaymentsComponent> = (args: any) => ({
  component: TradelinePaymentsComponent,
  props: {
    ...args,
  },
  template: `
    <div class="container mx-auto max-w-xs h-full">
      <brave-tradeline-payments
      ></brave-tradeline-payments>
    </div>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
