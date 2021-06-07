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
    console.log('xmlString', xmlString);
    const xml: ITransunionKBAQuestions = parser.parse(xmlString);
    return xml.ChallengeConfigurationType.MultiChoiceQuestion;
  }
}
