import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { CreditMixPureView } from './credit-mix-pure.view';
import { MOCK_COLLECTION_DEFAULT_CREDIT_UTILIZATION as mock } from '@views/dashboard/snapshots/credit-utilization/components/credit-utilization-card/constants';

export default {
  title: 'app/views/dashboard/credit-mix',
  component: CreditMixPureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SharedComponentsModule,
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<CreditMixPureView> = (args: any) => ({
  component: CreditMixPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  loans: mock.loans,
  creditCards: mock.creditCards
};
