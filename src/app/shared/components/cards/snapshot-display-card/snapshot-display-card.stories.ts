import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SnapshotDisplayCardComponent } from './snapshot-display-card.component';
import { LabelOfSnapshot } from './snapshot-label.pipe';
import { SnapshotStatus } from './snapshot-display-card.component';

export default {
  title: 'app/components/cards/snapshot-display-card',
  component: SnapshotDisplayCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mx-auto max-w-xs h-full">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story<SnapshotDisplayCardComponent> = (args: any) => ({
  component: SnapshotDisplayCardComponent,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  status:  SnapshotStatus.Default,
  title: 'Default Snapshopt',
  typeOfSnapshot: 'date',
  typeOfDate: 'Months',
  value: 3
};

export const Percentage = Template.bind({});
Percentage.args = {
  status: SnapshotStatus.Safe,
  label: LabelOfSnapshot.New,
  value: 19,
  title: 'Credit Card Utilization',
  typeOfSnapshot: 'percentage'
};

export const Tag = Template.bind({});
Tag.args = {
  status:  SnapshotStatus.Critical,
  value: 'Hello',
  title: 'Credit Mix',
  typeOfSnapshot: 'tag'
};

export const Digit = Template.bind({});
Digit.args = {
  status: SnapshotStatus.Safe,
  value: '5',
  label: LabelOfSnapshot.Hidden,
  title: 'New Negative Accounts',
  typeOfSnapshot: 'digit'
};

export const Time = Template.bind({});
Time.args = {
  status: SnapshotStatus.Danger,
  label: LabelOfSnapshot.Update,
  value: '3',
  title: 'Age of Credit',
  typeOfSnapshot: 'date',
  typeOfDate: 'Years'
};
