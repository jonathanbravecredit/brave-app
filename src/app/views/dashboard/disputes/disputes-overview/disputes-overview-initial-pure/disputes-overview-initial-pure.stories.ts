import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesOverviewInitialPureView } from './disputes-overview-initial-pure.view';
import { DISPUTES_MOCK } from '@views/dashboard/disputes/disputes-overview/disputes-overview-initial-pure/mock';

export default {
  title: 'app/views/dashboard/disputes/initial',
  component: DisputesOverviewInitialPureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `
        <div style="min-width: 20rem" class="container mx-auto max-w-xs h-full px-4">
            ${story}
      </div>
    `;
    }),
  ],
} as Meta;

const disputesMock = DISPUTES_MOCK;
const Template: Story<DisputesOverviewInitialPureView> = (args: any) => ({
  component: DisputesOverviewInitialPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  forceStateTo: 'mock',
};

export const Empty = Template.bind({});
Empty.args = {};

export const OnlyHistory = Template.bind({});
OnlyHistory.args = {
  forceStateTo: 'mock',
  emptyCurrentArr: true,
};

export const OnlyCurrent = Template.bind({});
OnlyCurrent.args = {
  forceStateTo: 'mock',
  emptyHistoricalArr: true,
};
