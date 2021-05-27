import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { OutlineNameFormComponent } from '@shared/components/forms/outline-name-form/outline-name-form.component';

export default {
  title: 'app/components/forms/outline-name-form',
  component: OutlineNameFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        OutlineInputComponent,
        FilledOnlytextButtonComponent,
        OutlineInputPipe,
        FilledOnlytextButtonPipe,
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineNameFormComponent> = (args: any) => ({
  component: OutlineNameFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
