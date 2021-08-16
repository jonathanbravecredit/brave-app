import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';

export default {
  title: 'app/components/buttons/filled-spinning-button',
  component: FilledSpinningButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="max-w-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg" style="min-width: 320px">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<FilledSpinningButtonComponent> = (args: any) => ({
  component: FilledSpinningButtonComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
