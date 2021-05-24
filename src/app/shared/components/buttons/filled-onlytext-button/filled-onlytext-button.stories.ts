import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  FilledOnlytextButtonComponent,
  IFilledOnlyTextButtonConfig,
} from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';

export default {
  title: 'app/components/buttons/filled-onlytext-button',
  component: FilledOnlytextButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [FilledOnlytextButtonPipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<FilledOnlytextButtonComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<brave-filled-onlytext-button>Default</brave-filled-onlytext-button>`,
});

export const Small = Template.bind({});
const smallConfig: IFilledOnlyTextButtonConfig = {
  buttonSize: 'sm',
  backgroundColor: 'bg-fuchsia-500',
  activeColor: 'bg-fuchsia-600',
  color: 'text-white',
};
Small.args = {
  config: { ...smallConfig },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Large = Template.bind({});
const largeConfig: IFilledOnlyTextButtonConfig = {
  buttonSize: 'lg',
  backgroundColor: 'bg-fuchsia-500',
  activeColor: 'bg-fuchsia-600',
  color: 'text-white',
};
Large.args = {
  config: { ...largeConfig },
};

export const Primary = Template.bind({});
const primaryConfig: IFilledOnlyTextButtonConfig = {
  buttonSize: 'base',
  backgroundColor: 'bg-indigo-800',
  activeColor: 'bg-indigo-900',
  color: 'text-white',
};
Primary.args = {
  config: { ...primaryConfig },
};

export const Secondary = Template.bind({});
const secondaryConfig: IFilledOnlyTextButtonConfig = {
  buttonSize: 'base',
  backgroundColor: 'bg-lightBlue-100',
  activeColor: 'bg-lightBlue-200',
  color: 'text-indigo-800',
};
Secondary.args = {
  config: { ...secondaryConfig },
};

export const Accent = Template.bind({});
const accentConfig: IFilledOnlyTextButtonConfig = {
  buttonSize: 'base',
  backgroundColor: 'bg-fuchsia-500',
  activeColor: 'bg-fuchsia-600',
  color: 'text-white',
};
Accent.args = {
  config: { ...accentConfig },
};
