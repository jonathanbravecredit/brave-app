import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { moduleMetadata } from "@storybook/angular";
import { HorizontalViewdetailButtonComponent } from "./horizontal-viewdetail-button.component";

export default {
  title: "app/components/buttons/horizontal-viewdetail-button",
  component: HorizontalViewdetailButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
  ],
} as Meta;

const Template: Story<HorizontalViewdetailButtonComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `
  <span style="p-6 width: 120px">
    <brave-horizontal-viewdetail-button>View Details</brave-horizontal-viewdetail-button>
  </span>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
