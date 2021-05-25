import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import {
  FilledChecktextProgressbarComponent,
  IFilledChecktextProgressbarConfig,
  IProgressStep,
} from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { FilledChecktextProgressbarPipe } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.pipe';

export default {
  title: 'app/components/progressbar/filled-checktext-progressbar',
  component: FilledChecktextProgressbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [FilledChecktextProgressbarPipe],
      imports: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const config: IFilledChecktextProgressbarConfig = {
  size: 'base',
  steps: [
    { active: false, complete: false, name: 'step 1' },
    { active: false, complete: false, name: 'step 2' },
    { active: false, complete: false, name: 'step 3' },
    { active: false, complete: false, name: 'step 4' },
    { active: false, complete: false, name: 'step 5' },
  ],
};

const stack: IProgressStep[] = [
  { active: true, complete: true, name: 'step 1' },
  { active: true, complete: true, name: 'step 2' },
  { active: true, complete: false, name: 'step 3' },
]; // pre-populated only for storybook visuals

const Template: Story<FilledChecktextProgressbarComponent> = (args: any) => ({
  props: {
    ...args,
    stack,
    config,
  },
  template: `<brave-filled-checktext-progressbar [config]="config"><brave-filled-checktext-progressbar>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
