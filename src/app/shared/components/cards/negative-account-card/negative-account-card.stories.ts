import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NegativeAccountCardComponent } from '@shared/components/cards/negative-account-card/negative-account-card.component';

export default {
  title: 'app/components/cards/negative-account',
  component: NegativeAccountCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<NegativeAccountCardComponent> = (args: any) => ({
  component: NegativeAccountCardComponent,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};
