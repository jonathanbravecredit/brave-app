import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FilledOnlytextButtonComponent } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { FilledOnlytextButtonPipe } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonComponent } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';
import { LinksOnlytextButtonPipe } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineInputPipe } from '@shared/components/inputs/outline-input/outline-input.pipe';
import { SimpleSigninFormComponent } from '@shared/components/forms/simple-signin-form/simple-signin-form.component';

export default {
  title: 'app/components/forms/simple-signin-form',
  component: SimpleSigninFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        OutlineInputComponent,
        LinksOnlytextButtonComponent,
        FilledOnlytextButtonComponent,
        OutlineInputPipe,
        LinksOnlytextButtonPipe,
        FilledOnlytextButtonPipe,
      ],
      imports: [HttpClientModule, RouterModule.forRoot([], { useHash: true }), FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SimpleSigninFormComponent> = (args: any) => ({
  component: SimpleSigninFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
