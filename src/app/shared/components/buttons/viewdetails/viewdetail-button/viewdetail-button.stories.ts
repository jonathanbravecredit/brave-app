import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetails/viewdetail-button/viewdetail-button.component';

export default {
  title: 'app/components/buttons/viewdetail-button',
  component: ViewdetailButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<ViewdetailButtonComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `
  <span style="p-6 width: 120px">
    <brave-viewdetail-button>View Details</brave-viewdetail-button>
  </span>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
