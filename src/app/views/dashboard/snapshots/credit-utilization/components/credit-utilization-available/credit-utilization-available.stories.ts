import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationAvailableComponent } from "./credit-utilization-available.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-available",
  component: CreditUtilizationAvailableComponent,
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

const Template: Story<CreditUtilizationAvailableComponent> = (args: any) => ({
  component: CreditUtilizationAvailableComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationAvailable = Template.bind({});
CreditUtilizationAvailable.args = {debtAmount: '1000', totalAmount: '2000'};
