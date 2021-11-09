import { APP_BASE_HREF, CurrencyPipe } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CreditUtilizationCardComponent } from './credit-utilization-card.component';
import { MOCK_COLLECTION_DEFAULT_CREDIT_UTILIZATION as mocks } from './constants';
import { AccountStatusPipe } from './account-status.pipe';

export default {
  title: 'app/views/snapshots/credit-utilization/components/credit-utilization-card',
  component: CreditUtilizationCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [AccountStatusPipe, CurrencyPipe],
      imports: [],
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

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {
  creditUtilizationType: 'credit-utilization',
  creditUtilization: mocks.creditUtilization
};
