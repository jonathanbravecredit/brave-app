import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputesOverviewHistoryPureView } from './disputes-overview-history-pure.view';

export default {
  title: 'app/views/dashboard/disputes/history',
  component: DisputesOverviewHistoryPureView,
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

const Template: Story<DisputesOverviewHistoryPureView> = (args: any) => ({
  component: DisputesOverviewHistoryPureView,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  forceMock: true
};
