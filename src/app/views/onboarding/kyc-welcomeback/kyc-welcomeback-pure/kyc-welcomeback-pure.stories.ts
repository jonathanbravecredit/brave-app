import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { KycWelcomebackPureComponent } from '@views/onboarding/kyc-welcomeback/kyc-welcomeback-pure/kyc-welcomeback-pure.component';

export default {
  title: 'app/views/onboarding/kyc-welcomeback',
  component: KycWelcomebackPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
    }),
    componentWrapperDecorator((story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`),
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
