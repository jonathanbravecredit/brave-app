import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import { UserAttributesInput } from '@shared/services/aws/api.service';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent extends KycBaseComponent implements OnInit {
  stepID = 2;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {
    super();
  }

  ngOnInit(): void {
    this.kycService.activateStep(this.stepID);
  }

  /**
   * Method to navigate back one step
   */
  goBack(): void {
    this.kycService.inactivateStep(this.stepID);
    this.router.navigate(['../address'], { relativeTo: this.route });
  }

  /**
   * TODO !!!!! THIS NEEDS MAJOR REFACTORING !!!! USE A RxJS PIPE
   * Method to take the form inputs and move to the next step
   * @param form
   */
  async goToNext(form: FormGroup): Promise<void> {
    // ssn is a little different as each code is one input
    if (form.valid) {
      const temp = this.formatAttributes(form, ssnMap);
      const lastFour = `${temp['input-0']}${temp['input-1']}${temp['input-2']}${temp['input-3']}`;
      const attrs = {
        ssn: {
          lastfour: lastFour,
        },
      } as UserAttributesInput;
      const data = await this.kycService.updateUserAttributesAsync(attrs);

      // IndicativeEnrichment response from TU service
      const enrichmentResponse = await this.kycService.sendIndicativeEnrichment(
        data
      );
      if (!enrichmentResponse)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      // parsed enrichment data (contains ssn)
      const enrichment = await this.kycService.processIndicativeEnrichmentResponse(
        enrichmentResponse
      );
      if (!enrichment)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      // parse ssn for getting the authentication questions (NEVER STORE IN DB or STATE!!!);
      const ssn =
        enrichment?.['s:Envelope']['s:Body'].IndicativeEnrichmentResponse
          .IndicativeEnrichmentResult['a:SSN'];
      if (!ssn?._text)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      // GetAuthorizationQuestions response from TU service
      const questionResponse = await this.kycService.sendGetAuthenticationQuestions(
        data,
        ssn?._text
      );
      if (!questionResponse)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      console.log('questionResponse ===> ', questionResponse);
      // parse authorization data (contains questions)
      const questions = await this.kycService.processGetAutthenticationQuestionsResponse(
        questionResponse
      );
      if (!questions)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      // Sucess...parse questions and pass to question component
      const xml =
        questions?.['s:Envelope']['s:Body'].GetAuthenticationQuestionsResponse
          .GetAuthenticationQuestionsResult['a:Questions'];
      if (!xml?._text)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      await this.kycService.updateCurrentRawQuestionsAsync(xml?._text || '');
      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../kba'], { relativeTo: this.route });
    }
  }

  /**
   * Handle the form errors gracefully
   * @param { [key: string]: AbstractControl } errors
   */
  handleError(errors: { [key: string]: AbstractControl }): void {
    console.log('form errors', errors);
  }
}

const ssnMap: Record<string, any> = {
  'input-0': true,
  'input-1': true,
  'input-2': true,
  'input-3': true,
};
