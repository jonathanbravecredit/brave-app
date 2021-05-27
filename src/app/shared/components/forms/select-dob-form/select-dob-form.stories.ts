import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutlineSelectInputComponent } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';
import { SelectDobFormComponent } from '@shared/components/forms/select-dob-form/select-dob-form.component';

export default {
  title: 'app/components/forms/select-dob-form',
  component: SelectDobFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineSelectInputComponent, OutlineSelectInputPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SelectDobFormComponent> = (args: any) => ({
  component: SelectDobFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
