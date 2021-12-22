import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { FacebookShareComponent } from "./facebook-share.component";

export default {
  title: "app/components/share-buttons/facebook-share",
  component: FacebookShareComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<FacebookShareComponent> = (args: any) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
