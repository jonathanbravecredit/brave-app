import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
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
    componentWrapperDecorator((story) => {
      return `<div class="container mx-auto max-w-xs h-full">${story}</div>`;
    }),
  ],
} as Meta;
const config: IFilledChecktextProgressbarConfig = {
  size: 'base',
};
const steps: IProgressStep[] = [
  { id: 0, active: true, complete: true, name: 'step 1' },
  { id: 1, active: true, complete: true, name: 'step 2' },
  { id: 2, active: true, complete: false, name: 'step 3' },
  { id: 3, active: false, complete: false, name: 'step 4' },
  { id: 4, active: false, complete: false, name: 'step 5' },
]; // pre-populated only for storybook visuals

const Template: Story<FilledChecktextProgressbarComponent> = (args: any) => ({
  component: FilledChecktextProgressbarComponent,
  props: {
    ...args,
    steps,
    config,
    activatedStep: 2,
    completedStep: 1,
  },
});
export const Default = Template.bind({});
Default.args = {};
Default.parameters;