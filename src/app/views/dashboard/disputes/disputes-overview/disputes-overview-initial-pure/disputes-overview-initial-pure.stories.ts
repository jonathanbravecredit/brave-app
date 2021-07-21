import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesOverviewInitialPureView } from './disputes-overview-initial-pure.view';

export default {
  title: 'app/views/dashboard/disputes/initial',
  component: DisputesOverviewInitialPureView,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SharedComponentsModule,
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<DisputesOverviewInitialPureView> = (args: any) => ({
  component: DisputesOverviewInitialPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  forceStateTo: 'mock'
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
