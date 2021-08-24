import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesPersonalPureView } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';

export default {
  title: 'app/views/disputes/personal-information',
  component: DisputesPersonalPureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<DisputesPersonalPureView> = (args: any) => ({
  component: DisputesPersonalPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const FormerName = Template.bind({});
FormerName.args = {};

export const FormerAddress = Template.bind({});
FormerAddress.args = {};

export const EmployerInfo = Template.bind({});
EmployerInfo.args = {};
