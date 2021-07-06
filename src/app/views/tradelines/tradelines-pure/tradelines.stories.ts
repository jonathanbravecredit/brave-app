import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinesPureComponent } from '@views/tradelines/tradelines-pure/tradelines-pure.component';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';

export default {
  title: 'app/views/tradelines/tradelines',
  component: TradelinesPureComponent,
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

const installment: ITradelineDetailsConfig = {
  dateOpened: '2019-01-01',
  accountDesignator: 'James Credit',
  termMonths: '48',
  late90Count: '3',
  amountPastDue: '950',
  disputeFlag: 'No',
};

const remarks = `This account was investigated two weeks ago per the client's request`;
const address = '123 Main Street, Hollywood, CA';

const Template: Story<TradelinesPureComponent> = (args: any) => ({
  component: TradelinesPureComponent,
  props: {
    ...args,
    config: installment,
    remarks: remarks,
    address: address,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
