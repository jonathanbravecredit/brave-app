import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationNoCardsTextComponent } from "./credit-utilization-no-cards-text.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-no-cards-text",
  component: CreditUtilizationNoCardsTextComponent,
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

const Template: Story<CreditUtilizationNoCardsTextComponent> = (args: any) => ({
  component: CreditUtilizationNoCardsTextComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {};
