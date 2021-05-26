import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycIdverificationComponent } from '@views/kyc-idverification/kyc-idverification.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export default {
  title: 'app/views/onboarding/kyc-idverification',
  component: KycIdverificationComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SharedComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
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
