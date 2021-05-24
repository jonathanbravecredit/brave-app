import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycLayoutComponent } from '@layouts/onboarding/kyc-layout/kyc-layout.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/layouts/onboarding/kyc-layout',
  component: KycLayoutComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, FormsModule, ReactiveFormsModule],
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
