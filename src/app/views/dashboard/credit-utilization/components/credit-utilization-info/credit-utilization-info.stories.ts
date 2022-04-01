import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationInfoComponent } from "./credit-utilization-info.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-info",
  component: CreditUtilizationInfoComponent,
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

const Template: Story<CreditUtilizationInfoComponent> = (args: any) => ({
  component: CreditUtilizationInfoComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {};
