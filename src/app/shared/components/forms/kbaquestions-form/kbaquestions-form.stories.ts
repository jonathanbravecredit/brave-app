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

const kbas: ITransunionKBAQuestion[] = [
  {
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
  },
  {
    QuestionType: {
      _text: 'IDMA',
    },
    SequenceNumber: {
      _text: '2',
    },
    LastChanceQuestion: {
      _text: 'false',
    },
    FakeQuestion: {
      _text: 'false',
    },
    FullQuestionText: {
      _text: 'Which of the following is a current or previous employer?',
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
          _text: 'American Express',
        },
        Key: {
          _text: 'American Express',
        },
        AnswerChoiceId: {
          _text: '3076837416',
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
          _text: 'Astrazeneca',
        },
        Key: {
          _text: 'Astrazeneca',
        },
        AnswerChoiceId: {
          _text: '3076837418',
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
          _text: 'Iec',
        },
        Key: {
          _text: 'Iec',
        },
        AnswerChoiceId: {
          _text: '3076837420',
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
          _text: 'Milliken',
        },
        Key: {
          _text: 'Milliken',
        },
        AnswerChoiceId: {
          _text: '3076837422',
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
          _text: '!(American Express^Astrazeneca^Iec^Milliken)',
        },
        AnswerChoiceId: {
          _text: '3076837424',
        },
      },
    ],
    Key: {
      _text: 'EMPLOYER',
    },
    QuestionId: {
      _text: '48442698',
    },
  },
  {
    QuestionType: {
      _text: 'IDMA',
    },
    SequenceNumber: {
      _text: '3',
    },
    LastChanceQuestion: {
      _text: 'false',
    },
    FakeQuestion: {
      _text: 'false',
    },
    FullQuestionText: {
      _text: 'What year was your most recent auto loan or lease established?',
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
          _text: '1998',
        },
        Key: {
          _text: '1998',
        },
        AnswerChoiceId: {
          _text: '3076837426',
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
          _text: '1999',
        },
        Key: {
          _text: '1999',
        },
        AnswerChoiceId: {
          _text: '3076837428',
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
          _text: '2001',
        },
        Key: {
          _text: '2001',
        },
        AnswerChoiceId: {
          _text: '3076837430',
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
          _text: '2002',
        },
        Key: {
          _text: '2002',
        },
        AnswerChoiceId: {
          _text: '3076837432',
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
          _text: '!(1998^1999^2001^2002)',
        },
        AnswerChoiceId: {
          _text: '3076837434',
        },
      },
    ],
    Key: {
      _text: 'AUTO_YR',
    },
    QuestionId: {
      _text: '48442700',
    },
  },
  {
    QuestionType: {
      _text: 'IDMA',
    },
    SequenceNumber: {
      _text: '4',
    },
    LastChanceQuestion: {
      _text: 'false',
    },
    FakeQuestion: {
      _text: 'false',
    },
    FullQuestionText: {
      _text:
        'What state was your social security number issued (this could be the state in which you were born or had your first job)?',
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
          _text: 'Arizona',
        },
        Key: {
          _text: 'Arizona',
        },
        AnswerChoiceId: {
          _text: '3076837436',
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
          _text: 'Florida',
        },
        Key: {
          _text: 'Florida',
        },
        AnswerChoiceId: {
          _text: '3076837438',
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
          _text: 'Kansas',
        },
        Key: {
          _text: 'Kansas',
        },
        AnswerChoiceId: {
          _text: '3076837440',
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
          _text: 'New Hampshire',
        },
        Key: {
          _text: 'New Hampshire',
        },
        AnswerChoiceId: {
          _text: '3076837442',
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
          _text: '!(Arizona^Florida^Kansas^New Hampshire)',
        },
        AnswerChoiceId: {
          _text: '3076837444',
        },
      },
    ],
    Key: {
      _text: 'SSN_ISSUED',
    },
    QuestionId: {
      _text: '48442702',
    },
  },
];

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
