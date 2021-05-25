import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  OutlineOnlytextButtonComponent,
  IOutlineOnlyTextButtonConfig,
} from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.component';
import { OutlineOnlytextButtonPipe } from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.pipe';

export default {
  title: 'app/components/buttons/outline-onlytext-button',
  component: OutlineOnlytextButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineOnlytextButtonPipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineOnlytextButtonComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<brave-outline-onlytext-button>Default</brave-outline-onlytext-button>`,
});

export const Small = Template.bind({});
const smallConfig: IOutlineOnlyTextButtonConfig = {
  buttonSize: 'sm',
  borderColor: 'border-indigo-800',
  activeColor: 'bg-indigo-900',
  hoverColor: 'bg-indigo-800',
  color: 'text-indigo-800',
};
Small.args = {
  config: { ...smallConfig },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Large = Template.bind({});
const largeConfig: IOutlineOnlyTextButtonConfig = {
  buttonSize: 'lg',
  borderColor: 'border-indigo-800',
  activeColor: 'bg-indigo-900',
  hoverColor: 'bg-indigo-800',
  color: 'text-indigo-800',
};
Large.args = {
  config: { ...largeConfig },
};

export const Primary = Template.bind({});
const primaryConfig: IOutlineOnlyTextButtonConfig = {
  buttonSize: 'base',
  borderColor: 'border-indigo-800',
  activeColor: 'bg-indigo-900',
  hoverColor: 'bg-indigo-800',
  color: 'text-indigo-800',
};
Primary.args = {
  config: { ...primaryConfig },
};
