import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { BaseExceptionPureView } from './base-exception-pure.view';

export default {
  title: 'app/views/exceptions/base-exception',
  component: BaseExceptionPureView,
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

const Template: Story<BaseExceptionPureView> = (args: any) => ({
  component: BaseExceptionPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Enroll =  Template.bind({});
Enroll.args = {
  code: '11'
}

export const OpenDispute =  Template.bind({});
OpenDispute.args = {
  code: '321'
}

export const Maintenance =  Template.bind({});
Maintenance.args = {
  code: '310'
}

export const NotEligible =  Template.bind({});
NotEligible.args = {
  code: '323'
}

export const Unavailable =  Template.bind({});
NotEligible.args = {
  code: '330'
}