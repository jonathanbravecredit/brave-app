import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  LinksOnlytextButtonComponent,
  ILinksOnlyTextButtonConfig,
} from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';

export default {
  title: 'app/components/buttons/links-onlytext-button',
  component: LinksOnlytextButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [LinksOnlytextButtonPipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<LinksOnlytextButtonComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<brave-links-onlytext-button>My Link</brave-links-onlytext-button>`,
});

export const Small = Template.bind({});
const smallConfig: ILinksOnlyTextButtonConfig = {
  buttonSize: 'sm',
  color: 'text-indigo-800',
};
Small.args = {
  config: { ...smallConfig },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Large = Template.bind({});
const largeConfig: ILinksOnlyTextButtonConfig = {
  buttonSize: 'lg',
  color: 'text-indigo-800',
};
Large.args = {
  config: { ...largeConfig },
};

export const Primary = Template.bind({});
const primaryConfig: ILinksOnlyTextButtonConfig = {
  buttonSize: 'base',
  color: 'text-indigo-800',
};
Primary.args = {
  config: { ...primaryConfig },
};

export const Accent = Template.bind({});
const accentConfig: ILinksOnlyTextButtonConfig = {
  buttonSize: 'base',
  color: 'text-fuchsia-500',
};
Accent.args = {
  config: { ...accentConfig },
};
