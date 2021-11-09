import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CreditUtilizationPercentagesComponent } from "./credit-utilization-percentages.component";
import { PercentageBadgeComponent } from "@shared/components/badges/percentage-badge/percentage-badge.component";

export default {
  title:
    "app/views/snapshots/credit-utilization/components/credit-utilization-percentages",
  component: CreditUtilizationPercentagesComponent,
  decorators: [
    moduleMetadata({
      declarations: [PercentageBadgeComponent],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<CreditUtilizationPercentagesComponent> = (args: any) => ({
  component: CreditUtilizationPercentagesComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {};
