import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditMixCardComponent } from "./credit-mix-card.component";

export default {
  title:
    "app/views/snapshots/credit-mix/components/credit-utilization-available",
  component: CreditMixCardComponent,
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

const Template: Story<CreditMixCardComponent> = (args: any) => ({
  component: CreditMixCardComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
