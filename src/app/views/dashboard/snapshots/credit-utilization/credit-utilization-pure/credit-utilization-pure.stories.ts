import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreditUtilizationPureView } from './credit-utilization-pure.view';
import { CreditUtilizationInfoComponent } from '../components/credit-utilization-info/credit-utilization-info.component';
import { CreditUtilizationHeaderComponent } from '../components/credit-utilization-header/credit-utilization-header.component';
import { CreditUtilizationCardComponent } from '../components/credit-utilization-card/credit-utilization-card.component';
import { CreditUtilizationTotalComponent } from '../components/credit-utilization-total/credit-utilization-total.component';

export default {
  title: 'app/views/snapshots/credit-utilization',
  component: CreditUtilizationPureView,
  decorators: [
    moduleMetadata({
      declarations: [
        CreditUtilizationInfoComponent,
        CreditUtilizationHeaderComponent,
        CreditUtilizationCardComponent,
        CreditUtilizationTotalComponent
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `
      <main>
        <section class="relative flex flex-col justify-start items-center w-full h-full min-h-screen min-w-screen">
          <div class="container max-w-xs sm:max-w-sm md:max-w-md" style="min-width: 320px">
            <div class="p-2">
              <div class="my-2">
              ${story}
              </div>
            </div>
          </div>
        </section>
      </main>`;
    }),
  ],
} as Meta;

// const cards = [
// ];

const Template: Story<CreditUtilizationPureView> = (args: any) => ({
  component: CreditUtilizationPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const NoCards = Template.bind({});
NoCards.args = {};
NoCards.parameters;
