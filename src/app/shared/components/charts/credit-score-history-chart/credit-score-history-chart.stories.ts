import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { CreditScoreHistoryChartComponent } from '@shared/components/charts/credit-score-history-chart/credit-score-history-chart.component';
import { ChartsModule } from 'ng2-charts';

export default {
  title: 'app/components/charts/credit-score-history-chart',
  component: CreditScoreHistoryChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ChartsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<CreditScoreHistoryChartComponent> = (args: any) => ({
  component: CreditScoreHistoryChartComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
