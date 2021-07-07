import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TradelineDisputeProcessView } from './tradeline-dispute-process.component';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/negative-account-card.component';

export default {
  title: 'app/views/tradelines/tradeline-dispute-process',
  component: TradelineDisputeProcessView,
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

const Template: Story<TradelineDisputeProcessView> = (args: any) => ({
  component: TradelineDisputeProcessView,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};
