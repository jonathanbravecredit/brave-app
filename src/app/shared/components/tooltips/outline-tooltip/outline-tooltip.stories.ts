import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { OutlineTooltipComponent } from '@shared/components/tooltips/outline-tooltip/outline-tooltip.component';
import { OutlineTooltipDirective } from '@shared/components/tooltips/outline-tooltip/outline-tooltip.directive';

export default {
  title: 'app/components/tooltips/outline-tooltip',
  component: OutlineTooltipComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineTooltipDirective],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineTooltipComponent> = (args: any) => ({
  component: OutlineTooltipComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Top = Template.bind({});
Top.args = {
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
};
