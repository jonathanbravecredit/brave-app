import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonComponent } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { SsnLastfourFormComponent } from '@shared/components/forms/ssn-lastfour-form/ssn-lastfour-form.component';
import { HiddenAsteriskInputComponent } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';
import { HiddenAsteriskInputDirective } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.directive';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn.component';

export default {
  title: 'app/views/onboarding/kyc-ssn',
  component: KycSsnComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        OutlineInputComponent,
        OutlineInputPipe,
        FilledOnlytextButtonComponent,
        FilledOnlytextButtonPipe,
        LinksOnlytextButtonComponent,
        LinksOnlytextButtonPipe,
        HiddenAsteriskInputComponent,
        HiddenAsteriskInputDirective,
        SsnLastfourFormComponent,
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const slots: number[] = [1, 2, 3, 4];
const Template: Story<KycSsnComponent> = (args: any) => ({
  component: KycSsnComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
