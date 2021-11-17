import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationNoCardsHeaderComponent } from "./credit-utilization-no-cards-header.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-no-cards-header",
  component: CreditUtilizationNoCardsHeaderComponent,
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

const Template: Story<CreditUtilizationNoCardsHeaderComponent> = (args: any) => ({
  component: CreditUtilizationNoCardsHeaderComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {};
