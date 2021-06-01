import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CreditcardCardComponent } from '@shared/components/cards/creditcard-card/creditcard-card.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/components/cards/creditcard-card',
  component: CreditcardCardComponent,
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

const Template: Story<CreditcardCardComponent> = (args: any) => ({
  component: CreditcardCardComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
