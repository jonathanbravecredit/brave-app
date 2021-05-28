import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KbaquestionsFormComponent } from '@shared/components/forms/kbaquestions-form/kbaquestions-form.component';

export default {
  title: 'app/components/forms/kbaquestions-form',
  component: KbaquestionsFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<KbaquestionsFormComponent> = (args: any) => ({
  component: KbaquestionsFormComponent,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
