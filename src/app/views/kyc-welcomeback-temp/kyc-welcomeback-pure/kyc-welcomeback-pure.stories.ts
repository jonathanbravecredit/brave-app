import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { KycWelcomebackPureComponent } from '@views/kyc-welcomeback-pure/kyc-welcomeback-pure.component';

export default {
  title: 'app/views/onboarding/kyc-welcomeback',
  component: KycWelcomebackPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<KycWelcomebackPureComponent> = (args: any) => ({
  component: KycWelcomebackPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
