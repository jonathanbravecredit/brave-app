import { Pipe, PipeTransform } from '@angular/core';
import {
  ITransunionKBAChallengeAnswer,
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'kycKbaquestions',
})
export class KycKbaquestionsPipe implements PipeTransform {
  transform(xmlString: string | null | undefined, ...args: unknown[]): ITransunionKBAQuestion[] {
    if (!xmlString) return [];
    const xml = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAQuestions>(xmlString);
    const challenge = tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAChallengeAnswer>(xmlString);
    const config = xml.ChallengeConfigurationType
      ? xml.ChallengeConfigurationType
      : challenge.VerifyChallengeAnswersResponseSuccess.ChallengeConfiguration; // challenge is in progress FLOW
    const questions = config.MultiChoiceQuestion;
    const resp = questions instanceof Array ? questions : [questions];
    return resp;
  }
}
