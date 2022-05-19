import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  FilledOnlytextBadgeComponent,
  IFilledOnlytextBadgeConfig,
} from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.component';
import { FilledOnlytextBadgePipe } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.pipe';

export default {
  title: 'app/components/badges/filled-onlytext-badge',
  component: FilledOnlytextBadgeComponent,
  decorators: [
    moduleMetadata({
      declarations: [FilledOnlytextBadgePipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<FilledOnlytextBadgeComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `<brave-filled-onlytext-badge>Badge</brave-filled-onlytext-badge>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Primary = Template.bind({});
const primaryConfig: IFilledOnlytextBadgeConfig = {
  size: 'base',
  backgroundColor: 'bg-indigo-200',
  color: 'text-indigo-800',
};
Primary.args = {
  config: { ...primaryConfig },
};

export const Secondary = Template.bind({});
const secondaryConfig: IFilledOnlytextBadgeConfig = {
  size: 'base',
  backgroundColor: 'bg-sky-100',
  color: 'text-indigo-800',
};
Secondary.args = {
  config: { ...secondaryConfig },
};

export const Accent = Template.bind({});
const accentConfig: IFilledOnlytextBadgeConfig = {
  size: 'base',
  backgroundColor: 'bg-fuchsia-200',
  color: 'text-fuchsia-500',
};
Accent.args = {
  config: { ...accentConfig },
};

export const Strong = Template.bind({});
const strongConfig: IFilledOnlytextBadgeConfig = {
  size: 'base',
  backgroundColor: 'bg-indigo-800',
  color: 'text-sky-100',
};
Strong.args = {
  config: { ...strongConfig },
};
