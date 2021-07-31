import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutlineVerificationcodeFormComponent } from '@shared/components/forms/outline-verificationcode-form/outline-verificationcode-form.component';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';

export default {
  title: 'app/components/forms/outline-verificationcode-form',
  component: OutlineVerificationcodeFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [OutlineInputComponent, OutlineInputPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OutlineVerificationcodeFormComponent> = (args: any) => ({
  component: OutlineVerificationcodeFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
