import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonComponent } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineVerificationcodeFormComponent } from '@shared/components/forms/outline-verificationcode-form/outline-verificationcode-form.component';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { KycIdverificationComponent } from '@views/kyc-idverification/kyc-idverification.component';

export default {
  title: 'app/views/onboarding/kyc-idverification',
  component: KycIdverificationComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        OutlineInputComponent,
        OutlineInputPipe,
        FilledOnlytextButtonComponent,
        FilledOnlytextButtonPipe,
        LinksOnlytextButtonComponent,
        LinksOnlytextButtonPipe,
        OutlineVerificationcodeFormComponent,
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<KycIdverificationComponent> = (args: any) => ({
  component: KycIdverificationComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;

export const Init = Template.bind({});
Init.args = {
  state: 'init',
};

export const Sent = Template.bind({});
Sent.args = {
  state: 'sent',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
};
