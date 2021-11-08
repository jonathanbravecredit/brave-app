import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationHeaderComponent } from "./credit-utilization-header.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-card",
  component: CreditUtilizationHeaderComponent,
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

const Template: Story<CreditUtilizationHeaderComponent> = (args: any) => ({
  component: CreditUtilizationHeaderComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {};
