import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelinesPureComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines-pure/tradelines-pure.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

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
  accountNumber: 'accountNumber',
  accountTypeSymbol: 'accountType',
  creditorName: 'creditorName',
  originalCreditor: 'originalCreditor',
  creditType: 'creditType',
  dateOpened: '1900-01-01',
  dateClosed: '1900-01-01',
  dateReported: '1900-01-01',
  accountDesignator: 'accountDesignator',
  termMonths: 'termMonths',
  late30Count: 0,
  late60Count: 0,
  late90Count: 0,
  monthlyPayment: 0,
  creditLimit: 0,
  amountPastDue: 0,
  currentBalance: 0,
  highestBalance: 0,
  disputeFlag: 'disputeFlag',
  status: 'status',
  openClosed: 'openClosed',
} as ITradelineDetailsConfig;

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
