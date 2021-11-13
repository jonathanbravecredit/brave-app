import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ChartsModule } from "ng2-charts";
import { PercentageGaugeComponent } from "./percentage-gauge.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

export default {
  title: "app/components/charts/percentage-gauge",
  component: PercentageGaugeComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ChartsModule, NgxChartsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<PercentageGaugeComponent> = (args: any) => ({
  component: PercentageGaugeComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = { percentageNumber: [{ name: "Test", value: 69 }] };
