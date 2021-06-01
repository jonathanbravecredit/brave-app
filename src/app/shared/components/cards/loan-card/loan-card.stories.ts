import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { LoanCardComponent } from '@shared/components/cards/loan-card/loan-card.component';

export default {
  title: 'app/components/cards/loan-card',
  component: LoanCardComponent,
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

const Template: Story<LoanCardComponent> = (args: any) => ({
  component: LoanCardComponent,
  props: {
    ...args,
    status: 'good',
  },
});

export const Default = Template.bind({});
Default.args = {
  status: 'okay',
};
Default.parameters;
