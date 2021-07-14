import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { UserDisputesPureView } from './user-disputes-pure.view';

export default {
  title: 'app/views/dashboard/user-disputes',
  component: UserDisputesPureView,
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

const Template: Story<UserDisputesPureView> = (args: any) => ({
  component: UserDisputesPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {
    forceCurrentZeroDisputeCollection: true,
    forceHistoryZeroDisputeCollection: true
};

export const OnlyHistory = Template.bind({});
OnlyHistory.args = {
    forceStateTo: 'mock',
    forceCurrentZeroDisputeCollection: true,
};

export const OnlyCurrent = Template.bind({});
OnlyCurrent.args = {
    forceStateTo: 'mock',
    forceHistoryZeroDisputeCollection: true,
};



