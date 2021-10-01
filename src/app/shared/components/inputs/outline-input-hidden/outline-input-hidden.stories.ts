import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IOutlineInputeConfig,
  OutlineInputComponent,
} from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputHiddenComponent } from '@shared/components/inputs/outline-input-hidden/outline-input-hidden.component';

export default {
  title: 'app/components/inputs/outline-input-hidden',
  component: OutlineInputHiddenComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineInputComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineInputHiddenComponent> = (args: any) => ({
  component: OutlineInputHiddenComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
