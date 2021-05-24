import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycAddressComponent } from '@views/kyc-address/kyc-address.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/views/onboarding/kyc-address',
  component: KycAddressComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<KycAddressComponent> = (args: any) => ({
  component: KycAddressComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
