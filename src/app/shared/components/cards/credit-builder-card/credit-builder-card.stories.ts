import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CreditBuilderCardComponent } from '@shared/components/cards/credit-builder-card/credit-builder-card.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/components/cards/credit-builder-card',
  component: CreditBuilderCardComponent,
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

const Template: Story<CreditBuilderCardComponent> = (args: any) => ({
  component: CreditBuilderCardComponent,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
