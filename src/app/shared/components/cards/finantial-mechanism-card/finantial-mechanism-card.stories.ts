import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { FinantialMechanismCardComponent } from './finantial-mechanism-card.component';
import { MOCK_COLLECTION_DEFAULT_FINANTIAL_MECHANISMS as mocks } from './constants';

export default {
  title: 'app/components/cards/finantial-mechanism',
  component: FinantialMechanismCardComponent,
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

const Template: Story<FinantialMechanismCardComponent> = (args: any) => ({
  component: FinantialMechanismCardComponent,
  props: {
    ...args,
    status: 'excellent',
  },
});

export const CreditUtilization = Template.bind({});
CreditUtilization.args = {
  finantialMechanismType: 'credit-utilization',
  finantialMechanism: mocks.creditUtilization
};

export const CreditCard = Template.bind({});
CreditCard.args = {
  finantialMechanismType: 'credit',
  finantialMechanism: mocks.creditCard
};

export const Loan = Template.bind({});
Loan.args = {
  finantialMechanismType: 'loan',
  finantialMechanism: mocks.loan
};
