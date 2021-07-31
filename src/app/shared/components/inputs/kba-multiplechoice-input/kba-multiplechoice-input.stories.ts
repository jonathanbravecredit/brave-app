import { APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KbaMultiplechoiceInputComponent } from '@shared/components/inputs/kba-multiplechoice-input/kba-multiplechoice-input.component';
import { ITransunionKBAQuestion } from '@shared/interfaces/tu-kba-questions.interface';

export default {
  title: 'app/components/inputs/kba-multiplechoice-input',
  component: KbaMultiplechoiceInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const question: ITransunionKBAQuestion = {} as ITransunionKBAQuestion;

const Template: Story<KbaMultiplechoiceInputComponent> = (args: any) => ({
  props: {
    ...args,
    question,
  },
  template: `<brave-kba-multiplechoice-input [question]="question"></brave-kba-multiplechoice-input>`,
});

export const Default = Template.bind({});
Default.args = {
  question,
};
Default.parameters;
