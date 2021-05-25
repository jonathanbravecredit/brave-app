import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingComponent } from '@layouts/onboarding/onboarding.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ViewsModule } from '@views/views.module';

export default {
  title: 'app/layouts/onboarding/onboarding-layout',
  component: OnboardingComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        ViewsModule,
        SharedComponentsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<OnboardingComponent> = (args: any) => ({
  component: OnboardingComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
