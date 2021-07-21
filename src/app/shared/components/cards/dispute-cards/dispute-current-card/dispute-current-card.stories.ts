import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputeCurrentCardComponent } from './dispute-current-card.component';

export default {
  title: 'app/components/cards/disputes/dispute-current-card',
  component: DisputeCurrentCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`),
  ],
} as Meta;

const Template: Story<DisputeCurrentCardComponent> = (args: any) => ({
  component: DisputeCurrentCardComponent,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  forceMock: true
};
