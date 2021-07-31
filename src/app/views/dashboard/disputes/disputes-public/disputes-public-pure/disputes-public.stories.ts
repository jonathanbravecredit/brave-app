import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesPublicPureView } from '@views/disputes-public/disputes-public-pure/disputes-public-pure.view';

export default {
  title: 'app/views/disputes/public-records',
  component: DisputesPublicPureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const Template: Story<DisputesPublicPureView> = (args: any) => ({
  component: DisputesPublicPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Reasons = Template.bind({});
Reasons.args = {
  initialStepId: 'reason',
  initialDisputeType: 'inaccurate',
};

export const Summary = Template.bind({});
Summary.args = {
  initialStepId: 'summary',
};

export const Success = Template.bind({});
Success.args = {
  isDisputeSent: true,
};
