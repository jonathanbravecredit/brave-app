import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CreditScoreHistoryNgxChartComponent } from '@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { CustomLineChartService } from '@shared/services/charts/custom-line-chart.service';

export default {
  title: 'app/components/charts/credit-score-history-ngx-chart',
  component: CreditScoreHistoryNgxChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [CustomLineChartService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<CreditScoreHistoryNgxChartComponent> = (args: any) => ({
  component: CreditScoreHistoryNgxChartComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
