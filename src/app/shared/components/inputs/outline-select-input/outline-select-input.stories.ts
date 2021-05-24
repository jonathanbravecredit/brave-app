import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  OutlineSelectInputComponent,
  IOutlineSelectInputConfig,
} from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';

export default {
  title: 'app/components/inputs/outline-select-input',
  component: OutlineSelectInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineSelectInputPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineSelectInputComponent> = (args: any) => ({
  component: OutlineSelectInputComponent,
  props: {
    ...args,
  },
});

// TODO: need to shrink the drop down arrow to fit to 20px (1.5REM)
// font-size: 1.25rem;
// line-height: 1.25rem;
// height: 1.5rem;
// width: 1.5rem;
// margin: -0.25rem;
export const Small = Template.bind({});
const smallConfig: IOutlineSelectInputConfig = {
  size: 'sm',
  label: 'Input label',
  options: ['one', 'two', 'three'],
};
Small.args = {
  config: { ...smallConfig },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Large = Template.bind({});
const largeConfig: IOutlineSelectInputConfig = {
  size: 'lg',
  label: 'Input label',
  options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
};
Large.args = {
  config: { ...largeConfig },
};
