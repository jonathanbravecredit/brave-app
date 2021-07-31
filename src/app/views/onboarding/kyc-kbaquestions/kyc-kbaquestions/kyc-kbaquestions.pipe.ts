import { Pipe, PipeTransform } from '@angular/core';
import {
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import * as parser from 'fast-xml-parser';

@Pipe({
  name: 'kycKbaquestions',
})
export class KycKbaquestionsPipe implements PipeTransform {
  transform(
    xmlString: string | null | undefined,
    ...args: unknown[]
  ): ITransunionKBAQuestion[] {
    if (!xmlString) return [];
    const xml: ITransunionKBAQuestions = parser.parse(xmlString);
    const questions = xml.ChallengeConfigurationType.MultiChoiceQuestion;
    return questions instanceof Array ? questions : [questions];
  }
}
