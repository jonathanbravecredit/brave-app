import { Pipe, PipeTransform } from '@angular/core';
import { ITransunionKBAQuestion, ITransunionKBAQuestions } from '@shared/interfaces/tu-kba-questions.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'kycKbaquestions',
})
export class KycKbaquestionsPipe implements PipeTransform {
  transform(xmlString: string | null | undefined, ...args: unknown[]): ITransunionKBAQuestion[] {
    if (!xmlString) return [];
    debugger;
    const xml: ITransunionKBAQuestions = tu.parsers.onboarding.parseCurrentRawAuthXML(xmlString);
    const questions = xml.ChallengeConfigurationType.MultiChoiceQuestion;
    return questions instanceof Array ? questions : [questions];
  }
}
