export interface ITransunionKBAQuestions {
  _declaration: {
    _attributes: {
      version: string;
      encoding: string;
    };
  };
  ChallengeConfigurationType: {
    _attributes: {
      'xmlns:xsd': string;
      'xmlns:xsi': string;
      xmlns: string;
    };
    RulesApp: {
      _text: string;
    };
    CorrectAnswersNeeded: {
      _text: string;
    };
    AnswerAttemptsAllowed: {
      _text: string;
    };
    MultiChoiceQuestion: ITransunionKBAQuestion[];
    ApplicantChallengeId: {
      _text: string;
    };
    ApplicantId: {
      _text: string;
    };
  };
}

export interface ITransunionKBAQuestion {
  QuestionType: {
    _text: string;
  };
  SequenceNumber: {
    _text: string;
  };
  LastChanceQuestion: {
    _text: string;
  };
  FakeQuestion: {
    _text: string;
  };
  FullQuestionText: {
    _text: string;
  };
  KeyQuestionText: {
    PromptDate: {
      _text: string;
    };
  };
  AnswerChoice: ITransunionKBAAnswer[];
  Key: {
    _text: string;
  };
  QuestionId: {
    _text: string;
  };
}

export interface ITransunionKBAAnswer {
  SequenceNumber: {
    _text: string;
  };
  IsCorrectAnswer: {
    _text: string;
  };
  AnswerChoiceText: {
    _text: string;
  };
  Key: {
    _text: string;
  };
  AnswerChoiceId: {
    _text: string;
  };
}
