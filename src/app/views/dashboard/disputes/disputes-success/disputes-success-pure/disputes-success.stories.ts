import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesSuccessPureView } from '@views/dashboard/disputes/disputes-success/disputes-success-pure/disputes-success-pure.view';

export default {
  title: 'app/views/disputes/sucess',
  component: DisputesSuccessPureView,
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

const Template: Story<DisputesSuccessPureView> = (args: any) => ({
  component: DisputesSuccessPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
