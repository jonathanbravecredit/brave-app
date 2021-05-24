import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  OutlineInputComponent,
  IOutlineInputeConfig,
} from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';

export default {
  title: 'app/components/inputs/outline-input-field',
  component: OutlineInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineInputPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineInputComponent> = (args: any) => ({
  component: OutlineInputComponent,
  props: {
    ...args,
  },
});

export const Small = Template.bind({});
const smallConfig: IOutlineInputeConfig = {
  size: 'sm',
  type: 'text',
  label: 'Input label',
  placeholder: 'Input text',
  autocomplete: 'off',
  value: '',
};
Small.args = {
  config: { ...smallConfig },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Large = Template.bind({});
const largeConfig: IOutlineInputeConfig = {
  size: 'lg',
  type: 'text',
  label: 'Input label',
  placeholder: 'Input text',
  autocomplete: 'off',
  value: '',
};
Large.args = {
  config: { ...largeConfig },
};
