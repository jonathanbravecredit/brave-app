import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  FilledClosingAlertComponent,
  IFilledClosingAlertConfig,
} from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';
import { FilledClosingAlertPipe } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.pipe';

export default {
  title: 'app/components/alerts/filled-closing-alert',
  component: FilledClosingAlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [FilledClosingAlertPipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<FilledClosingAlertComponent> = (args: any) => ({
  component: FilledClosingAlertComponent,
  props: {
    ...args,
    showAlert: true,
  },
});

export const ExtraSmall = Template.bind({});
const extraSmallConfig: IFilledClosingAlertConfig = {
  size: 'xs',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertTitle: 'Alert!',
  alertBody: 'Something went wrong. Please try again.',
};
ExtraSmall.args = {
  config: { ...extraSmallConfig },
};

export const Small = Template.bind({});
const smallConfig: IFilledClosingAlertConfig = {
  size: 'sm',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertTitle: 'Alert!',
  alertBody: 'Something went wrong. Please try again.',
};
Small.args = {
  config: { ...smallConfig },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Large = Template.bind({});
const largeConfig: IFilledClosingAlertConfig = {
  size: 'lg',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertTitle: 'Alert!',
  alertBody: 'Something went wrong. Please try again.',
};
Large.args = {
  config: { ...largeConfig },
};

export const ExtraLarge = Template.bind({});
const extraLargeConfig: IFilledClosingAlertConfig = {
  size: 'xl',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertTitle: 'Alert!',
  alertBody: 'Something went wrong. Please try again.',
};
ExtraLarge.args = {
  config: { ...extraLargeConfig },
};

export const Primary = Template.bind({});
const primaryConfig: IFilledClosingAlertConfig = {
  size: 'base',
  backgroundColor: 'bg-indigo-800',
  color: 'text-white',
  alertTitle: 'Alert!',
  alertBody: 'Something went wrong. Please try again.',
};
Primary.args = {
  config: { ...primaryConfig },
};

export const Accent = Template.bind({});
const accentConfig: IFilledClosingAlertConfig = {
  size: 'base',
  backgroundColor: 'bg-fuchsia-500',
  color: 'text-white',
  alertTitle: 'Alert!',
  alertBody: 'Something went wrong. Please try again.',
};
Accent.args = {
  config: { ...accentConfig },
};
