import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '@views/signup/signup.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

export default {
  title: 'app/views/onboarding/signup',
  component: SignupComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
        SharedComponentsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SignupComponent> = (args: any) => ({
  component: SignupComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
