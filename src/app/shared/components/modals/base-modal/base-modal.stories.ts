import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { BaseModalComponent } from './base-modal.component';

export default {
  title: 'app/components/modals/base-modal',
  component: BaseModalComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<BaseModalComponent> = (args: any) => ({
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  isModalActive: true
};
