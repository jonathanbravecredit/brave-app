import { APP_BASE_HREF } from "@angular/common";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { moduleMetadata } from "@storybook/angular";
import { LinkViewdetailButtonComponent } from "./link-viewdetail-button.component";
import { Router } from '@angular/router';
import { NavigatorService } from '../../../../services/navigator/navigator.service';

export default {
  title: "app/components/buttons/link-viewdetail-button",
  component: LinkViewdetailButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }, { provide: NavigatorService, useValue: "/" }],

    }),
  ],
} as Meta;

const Template: Story<LinkViewdetailButtonComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `
  <span style="p-6 width: 120px">
    <brave-link-viewdetail-button>View Details</brave-link-viewdetail-button>
  </span>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
