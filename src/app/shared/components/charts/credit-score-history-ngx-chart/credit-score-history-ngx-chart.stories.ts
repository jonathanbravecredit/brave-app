import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditScoreHistoryNgxChartComponent } from "@shared/components/charts/credit-score-history-ngx-chart/credit-score-history-ngx-chart.component";
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { CustomLineChartService } from "@shared/services/charts/custom-line-chart.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

export default {
  title: "app/components/charts/credit-score-history-ngx-chart",
  component: CreditScoreHistoryNgxChartComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, BrowserAnimationsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        CustomLineChartService,
        { provide: APP_BASE_HREF, useValue: "/" },
      ],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<CreditScoreHistoryNgxChartComponent> = (args: any) => ({
  component: CreditScoreHistoryNgxChartComponent,
  props: {
    multi: [
      {
        name: "CreditScore",
        series: [
          {
            name: "Jan",
            value: 350,
          },
          {
            name: "Feb",
            value: 850,
          },
          {
            name: "Mar",
            value: 750,
          },
          {
            name: "Apr",
            value: 400,
          },
          {
            name: "May",
            value: 350,
          },
          {
            name: "Jun",
            value: 621,
          },
          {
            name: "Jul",
            value: 350,
          },
          {
            name: "Aug",
            value: 850,
          },
          {
            name: "Sep",
            value: 750,
          },
          {
            name: "Oct",
            value: 400,
          },
          {
            name: "Nov",
            value: 350,
          },
          {
            name: "Dec",
            value: 621,
          },
        ],
      },
    ],
  },
});

export const Default = Template.bind({});
Default.args = {

};
