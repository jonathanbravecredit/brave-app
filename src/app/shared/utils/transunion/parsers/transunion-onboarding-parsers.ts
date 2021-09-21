import { ISubscriber } from '@shared/interfaces/credit-bureau.interface';
import { IGetAuthenticationQuestionsResult } from '@shared/interfaces/get-authorization-questions.interface';
import { ITransunionKBAChallengeAnswer } from '@shared/interfaces/tu-kba-questions.interface';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';
import * as parser from 'fast-xml-parser';
const he = require('he');
const parserOptions = {
  attributeNamePrefix: '',
  ignoreAttributes: false,
  ignoreNameSpace: true,
  parseAttributeValue: true,
  attrValueProcessor: (val: any, attrName: any) => he.encode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val: any, tagName: any) => he.encode(val), //default is a=>a
};

export class TransunionOnboardingParsers extends TransunionBase {
  constructor() {
    super();
  }

  /**
   * Helper method to parse the auth questions as embeded objects
   * @param questions
   * @returns
   */
  static parseAuthQuestions(questions: IGetAuthenticationQuestionsResult | undefined): string | undefined {
    if (!questions) return '';
    const questionXml = questions.Questions;
    return questionXml ? questionXml : '';
  }

  /**
   * This parses the xml string and returns it as the TU question format
   * @param xml xml string in the TU question schema
   * @returns
   */
  static parseCurrentRawAuthXML<T>(xml: string): T {
    // need two decodes, encoded by TU and our default parser settings
    const clean = he.decode(he.decode(xml));
    const questions: T = parser.parse(clean, parserOptions);
    return questions;
  }
}
