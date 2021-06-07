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

const question: ITransunionKBAQuestion = {
  QuestionType: {
    _text: 'IDMA',
  },
  SequenceNumber: {
    _text: '1',
  },
  LastChanceQuestion: {
    _text: 'false',
  },
  FakeQuestion: {
    _text: 'false',
  },
  FullQuestionText: {
    _text: 'What was the original amount of your most recent mortgage?',
  },
  KeyQuestionText: {
    PromptDate: {
      _text: '2021-06-06T20:07:05-07:00',
    },
  },
  AnswerChoice: [
    {
      SequenceNumber: {
        _text: '1',
      },
      IsCorrectAnswer: {
        _text: 'false',
      },
      AnswerChoiceText: {
        _text: '$ 1 - $ 50000',
      },
      Key: {
        _text: '$ 1 - $ 50000',
      },
      AnswerChoiceId: {
        _text: '3076837406',
      },
    },
    {
      SequenceNumber: {
        _text: '2',
      },
      IsCorrectAnswer: {
        _text: 'false',
      },
      AnswerChoiceText: {
        _text: '$ 150001 - $ 200000',
      },
      Key: {
        _text: '$ 150001 - $ 200000',
      },
      AnswerChoiceId: {
        _text: '3076837408',
      },
    },
    {
      SequenceNumber: {
        _text: '3',
      },
      IsCorrectAnswer: {
        _text: 'false',
      },
      AnswerChoiceText: {
        _text: '$ 200001 - $ 250000',
      },
      Key: {
        _text: '$ 200001 - $ 250000',
      },
      AnswerChoiceId: {
        _text: '3076837410',
      },
    },
    {
      SequenceNumber: {
        _text: '4',
      },
      IsCorrectAnswer: {
        _text: 'false',
      },
      AnswerChoiceText: {
        _text: '$ 50001 - $ 100000',
      },
      Key: {
        _text: '$ 50001 - $ 100000',
      },
      AnswerChoiceId: {
        _text: '3076837412',
      },
    },
    {
      SequenceNumber: {
        _text: '5',
      },
      IsCorrectAnswer: {
        _text: 'false',
      },
      AnswerChoiceText: {
        _text: 'None of the Above',
      },
      Key: {
        _text:
          '!($ 1 - $ 50000^$ 150001 - $ 200000^$ 200001 - $ 250000^$ 50001 - $ 100000)',
      },
      AnswerChoiceId: {
        _text: '3076837414',
      },
    },
  ],
  Key: {
    _text: 'MTG_ORIG_AMT',
  },
  QuestionId: {
    _text: '48442696',
  },
} as ITransunionKBAQuestion;

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
