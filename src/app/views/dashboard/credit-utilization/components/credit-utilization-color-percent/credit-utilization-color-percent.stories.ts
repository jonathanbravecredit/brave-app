import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationColorPercentComponent } from "./credit-utilization-color-percent.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-color-percent",
  component: CreditUtilizationColorPercentComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<CreditUtilizationColorPercentComponent> = (args: any) => ({
  component: CreditUtilizationColorPercentComponent,
  props: {
    ...args,
    utilPercent: 5,
  },
});

export const CreditUtilizationColorPercent = Template.bind({});
