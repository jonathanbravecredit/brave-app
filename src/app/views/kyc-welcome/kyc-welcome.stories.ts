import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/views/onboarding/kyc-welcome',
  component: KycWelcomeComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [SharedComponentsModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<KycWelcomeComponent> = (args: any) => ({
  component: KycWelcomeComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
