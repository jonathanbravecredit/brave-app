import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KbaquestionsFormComponent } from '@shared/components/forms/kbaquestions-form/kbaquestions-form.component';
import { ITransunionKBAQuestion } from '@shared/interfaces/tu-kba-questions.interface';
import { KbaMultiplechoiceInputComponent } from '@shared/components/inputs/kba-multiplechoice-input/kba-multiplechoice-input.component';

export default {
  title: 'app/components/forms/kbaquestions-form',
  component: KbaquestionsFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [KbaMultiplechoiceInputComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const kbas: any = [];
const Template: Story<KbaquestionsFormComponent> = (args: any) => ({
  props: {
    ...args,
    kbas,
    required: true,
  },
  template: `<brave-kbaquestions-form [kbas]="kbas"></brave-kbaquestions-form>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters;
