import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { KnowYouFormComponent } from '@shared/components/forms/know-you-form/know-you-form.component';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { SignupKnowyouComponent } from '@views/signup-knowyou/signup-knowyou.component';

export default {
  title: 'app/views/onboarding/signup-knowyou',
  component: SignupKnowyouComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        OutlineInputComponent,
        FilledOnlytextButtonComponent,
        OutlineInputPipe,
        FilledOnlytextButtonPipe,
        KnowYouFormComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([], { useHash: true }),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SignupKnowyouComponent> = (args: any) => ({
  component: SignupKnowyouComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
