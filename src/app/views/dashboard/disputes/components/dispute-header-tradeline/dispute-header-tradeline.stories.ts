import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { DisputeHeaderTradelineComponent } from "./dispute-header-tradeline.component";
import { DecodePipe } from "@shared/pipes/decode/decode.pipe";

export default {
  title:
    "app/views/disputes/components/header-tradeline",
  component: DisputeHeaderTradelineComponent,
  decorators: [
    moduleMetadata({
      declarations: [DecodePipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<DisputeHeaderTradelineComponent> = (args: any) => ({
  component: DisputeHeaderTradelineComponent,
  props: {
    ...args,
  },
});

export const CreditUtilizationCard = Template.bind({});
CreditUtilizationCard.args = {};
