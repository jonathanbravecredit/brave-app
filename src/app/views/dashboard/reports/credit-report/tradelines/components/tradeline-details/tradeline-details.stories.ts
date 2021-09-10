import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DashboardModule } from '@views/dashboard/dashboard.module';
import { TradelineDetailsComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/tradeline-details.component';
import {
  COLLECTION_PARTITION,
  COLLECTION_SUBSCRIBER,
  INSTALLMENT_PARTITION,
  INSTALLMENT_SUBSCRIBER,
  REVOLVING_PARTITION,
  REVOLVING_SUBSCRIBER,
} from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/mocks';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces';

export default {
  title: 'app/components/tradelines/tradeline-details',
  component: TradelineDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, DashboardModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;

const revolvingPartition = REVOLVING_PARTITION as ITradeLinePartition;
const revolvingSubscriber = REVOLVING_SUBSCRIBER as ISubscriber;
const installmentPartition = INSTALLMENT_PARTITION as ITradeLinePartition;
const installmentSubscriber = INSTALLMENT_SUBSCRIBER as ISubscriber;
const collectionPartition = COLLECTION_PARTITION as ITradeLinePartition;
const collectionSubscriber = COLLECTION_SUBSCRIBER as ISubscriber;

const Template: Story<TradelineDetailsComponent> = (args: any) => ({
  component: TradelineDetailsComponent,
  props: {
    ...args,
  },
});

export const Revolving = Template.bind({});
Revolving.args = {
  tradeline: revolvingPartition,
  subscriber: revolvingSubscriber,
};

export const Installment = Template.bind({});
Installment.args = {
  tradeline: installmentPartition,
  subscriber: installmentSubscriber,
};

export const Collections = Template.bind({});
Collections.args = {
  tradeline: collectionPartition,
  subscriber: collectionSubscriber,
};
