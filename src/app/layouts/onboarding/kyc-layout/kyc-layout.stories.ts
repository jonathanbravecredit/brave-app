import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycLayoutComponent } from '@layouts/onboarding/kyc-layout/kyc-layout.component';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonComponent } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { DateofbirthFormComponent } from '@shared/components/forms/dateofbirth-form/dateofbirth-form.component';
import { OutlineAddressFormComponent } from '@shared/components/forms/outline-address-form/outline-address-form.component';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { OutlineSelectInputComponent } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { OutlineSelectInputPipe } from '@shared/components/inputs/outline-select-input/outline-select-input.pipe';
import { FilledChecktextProgressbarComponent } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { FilledChecktextProgressbarPipe } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.pipe';
import { KycAddressComponent } from '@views/kyc-address/kyc-address.component';

export default {
  title: 'app/layouts/onboarding/kyc-layout',
  component: KycLayoutComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        OutlineInputComponent,
        OutlineInputPipe,
        FilledOnlytextButtonComponent,
        FilledOnlytextButtonPipe,
        LinksOnlytextButtonComponent,
        LinksOnlytextButtonPipe,
        OutlineSelectInputComponent,
        OutlineSelectInputPipe,
        DateofbirthFormComponent,
        OutlineAddressFormComponent,
        KycAddressComponent,
        FilledChecktextProgressbarComponent,
        FilledChecktextProgressbarPipe,
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<KycLayoutComponent> = (args: any) => ({
  component: KycLayoutComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
