import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { PercentageBadgeComponent } from "./percentage-badge.component";

export default {
  title:
    "app/components/badges/percentage-badge",
  component: PercentageBadgeComponent,
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

const Template: Story<PercentageBadgeComponent> = (args: any) => ({
  component: PercentageBadgeComponent,
  props: {
    ...args,
  },
});

export const Test = Template.bind({});
Test.args = {text: 'Very Poor', label: '75-100%', color: 'red'};
