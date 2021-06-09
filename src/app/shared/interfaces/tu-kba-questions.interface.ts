export interface ITransunionKBAQuestions {
  ChallengeConfigurationType: {
    RulesApp: string;
    CorrectAnswersNeeded: string;
    AnswerAttemptsAllowed: string;
    MultiChoiceQuestion: ITransunionKBAQuestion[];
    ApplicantChallengeId: string;
    ApplicantId: string;
  };
}

export interface ITransunionKBAQuestion {
  QuestionType: string;
  SequenceNumber: string;
  LastChanceQuestion: string;
  FakeQuestion: string;
  FullQuestionText: string;
  KeyQuestionText: {
    PromptDate: string;
  };
  AnswerChoice: ITransunionKBAAnswer[];
  Key: string;
  QuestionId: string;
}

export interface ITransunionKBAAnswer {
  SequenceNumber: string;
  IsCorrectAnswer: string;
  AnswerChoiceText: string;
  Key: string;
  AnswerChoiceId: string;
}

export interface ITransunionBAAnsweredQuestion {
  VerifyChallengeAnswersRequestMultiChoiceQuestion: {
    QuestionId: number;
    SelectedAnswerChoice: {
      AnswerChoiceId: string;
    };
    AnswerChoiceText: string;
    IsCorrectAnswer?: boolean;
    Key: string;
  };
}
