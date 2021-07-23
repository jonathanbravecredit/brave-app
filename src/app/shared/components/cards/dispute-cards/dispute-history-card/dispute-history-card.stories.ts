import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DisputeHistoryCardComponent } from './dispute-history-card.component';
import {
  MOCK_DEFAULT_DISPUTES_HISTORICAL,
  MOCK_DEFAULT_DISPUTE_HISTORICAL,
} from '@shared/components/cards/dispute-cards/constants';

export default {
  title: 'app/components/cards/disputes/dispute-historical-card',
  component: DisputeHistoryCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`),
  ],
} as Meta;

const mock = MOCK_DEFAULT_DISPUTE_HISTORICAL;
const Template: Story<DisputeHistoryCardComponent> = (args: any) => ({
  component: DisputeHistoryCardComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  creditorName: mock.creditorName,
  latestDateSubmitted: mock.latestDateSubmitted,
  decision: mock.decision,
  resultReceived: mock.resultReceived,
};
