import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { KycCongratulationsPureComponent } from '@views/kyc-congratulations/kyc-congratulations-pure/kyc-congratulations-pure.component';

export default {
  title: 'app/views/onboarding/kyc-congratulations',
  component: KycCongratulationsPureComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<KycCongratulationsPureComponent> = (args: any) => ({
  component: KycCongratulationsPureComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
