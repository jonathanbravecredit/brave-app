import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export default {
  title: 'app/views/onboarding/kyc-ssn',
  component: KycSsnComponent,
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
