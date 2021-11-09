import { APP_BASE_HREF, CurrencyPipe } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CreditUtilizationCardComponent } from './credit-utilization-card.component';
import { AccountStatusPipe } from './account-status.pipe';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { ITradeLinePartition } from '@shared/interfaces';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/views/snapshots/credit-utilization/components/credit-utilization-card',
  component: CreditUtilizationCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [AccountStatusPipe],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<CreditUtilizationCardComponent> = (args: any) => ({
  component: CreditUtilizationCardComponent,
  props: {
    ...args,
  },
});

const tradeLineParseMock : ITradelineDetailsConfig = {
tradeline: {} as ITradeLinePartition,
creditorName: 'CITI',
creditLimit: 10000,
currentBalance: 5000,
openClosed: 'O'
}

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {
  creditUtilizationType: 'credit-utilization',
  tradeLineDetails: tradeLineParseMock
};
