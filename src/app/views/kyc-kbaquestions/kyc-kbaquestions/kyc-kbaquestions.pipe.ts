import { Pipe, PipeTransform } from '@angular/core';
import {
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
} from '@shared/interfaces/tu-kba-questions.interface';
import * as convert from 'xml-js';

@Pipe({
  name: 'kycKbaquestions',
})
export class KycKbaquestionsPipe implements PipeTransform {
  transform(
    xmlString: string | null | undefined,
    ...args: unknown[]
  ): ITransunionKBAQuestion[] {
    if (!xmlString) return [];
    const xml: ITransunionKBAQuestions = JSON.parse(
      convert.xml2json(xmlString, { compact: true })
    );
    return xml.ChallengeConfigurationType.MultiChoiceQuestion;
  }
}
