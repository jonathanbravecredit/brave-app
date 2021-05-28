import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { KycKbaquestionsPureComponent } from '@views/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';

export default {
  title: 'app/views/onboarding/kyc-kbaquestions',
  component: KycKbaquestionsPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<KycKbaquestionsPureComponent> = (args: any) => ({
  component: KycKbaquestionsPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
