import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { CreditUtilizationCardComponent } from './credit-utilization-card.component';
import { MOCK_COLLECTION_DEFAULT_FINANTIAL_MECHANISMS as mocks } from './constants';

export default {
  title: 'app/components/cards/finantial-mechanism',
  component: CreditUtilizationCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
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
    status: 'excellent',
  },
});

export const CreditUtilization = Template.bind({});
CreditUtilization.args = {
  creditUtilizationType: 'credit-utilization',
  creditUtilization: mocks.creditUtilization
};

export const CreditCard = Template.bind({});
CreditCard.args = {
  creditUtilizationType: 'credit',
  creditUtilization: mocks.creditCard
};

export const Loan = Template.bind({});
Loan.args = {
  creditUtilizationType: 'loan',
  creditUtilization: mocks.loan
};
