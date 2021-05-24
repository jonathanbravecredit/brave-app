import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { SignupErrorValidationComponent } from '@views/signup-error-validation/signup-error-validation.component';

export default {
  title: 'app/views/onboarding/signup-error-validation',
  component: SignupErrorValidationComponent,
  decorators: [
    moduleMetadata({
      declarations: [FilledOnlytextButtonComponent, FilledOnlytextButtonPipe],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true })],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SignupErrorValidationComponent> = (args: any) => ({
  component: SignupErrorValidationComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
