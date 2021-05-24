import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateofbirthFormComponent } from '@shared/components/forms/dateofbirth-form/dateofbirth-form.component';
import { OutlineSelectInputComponent } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';

export default {
  title: 'app/components/forms/dateofbirth-form',
  component: DateofbirthFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineSelectInputComponent, OutlineSelectInputPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<DateofbirthFormComponent> = (args: any) => ({
  component: DateofbirthFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
