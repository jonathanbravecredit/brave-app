import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { KycIdverificationPureComponent } from '@views/kyc-idverification/kyc-idverification-pure/kyc-idverification-pure.component';

export default {
  title: 'app/views/onboarding/kyc-idverification',
  component: KycIdverificationPureComponent,
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

const Template: Story<KycIdverificationPureComponent> = (args: any) => ({
  component: KycIdverificationPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
