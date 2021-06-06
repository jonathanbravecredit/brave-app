import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';
import {
  APIService,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { IIndicativeEnrichmentResponseSuccess } from '@shared/models/indicative-enrichment';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent extends KycBaseComponent implements OnInit {
  stepID = 2;
  constructor(
    private api: APIService,
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService,
    private transunion: TransunionService
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
      const data = await this.kycService.updateUserAttributesSync(attrs);

      // IndicativeEnrichment response from TU service
      const enrichmentResponse = await this.sendIndicativeEnrichment(data);
      if (!enrichmentResponse)
        this.router.navigate(['../identityfull'], { relativeTo: this.route });

      // parsed enrichment data (contains ssn)
      const enrichment = await this.processIndicativeEnrichmentResponse(
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
      const questionResponse = await this.sendGetAuthenticationQuestions(
        data,
        ssn?._text
      );

      this.kycService.completeStep(this.stepID);
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
  }

  /**
   * Send the indicative enrichment message to the Transunion backend and await a response
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendIndicativeEnrichment(
    data: UpdateAppDataInput
  ): Promise<any | undefined> {
    try {
      const msg = this.transunion.createIndicativeEnrichmentPayload(data);
      const res = await this.api.Transunion(
        'IndicativeEnrichment',
        JSON.stringify(msg)
      );
      return res ? res : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendGetAuthenticationQuestions(
    data: UpdateAppDataInput,
    ssn: string = ''
  ): Promise<any | undefined> {
    if (!ssn) return;
    try {
      const msg = this.transunion.createGetAuthenticationQuestionsPayload(
        data,
        ssn
      );
      const res = await this.api.Transunion(
        'GetAuthenticationQuestions',
        JSON.stringify(msg)
      );
      return res ? res : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
    }
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  async processIndicativeEnrichmentResponse(
    resp: string
  ): Promise<IIndicativeEnrichmentResponseSuccess | undefined> {
    const enrichment: IIndicativeEnrichmentResponseSuccess = JSON.parse(
      JSON.parse(resp)['IndicativeEnrichmentResults']
    );
    if (
      enrichment['s:Envelope']['s:Body'].IndicativeEnrichmentResponse
        .IndicativeEnrichmentResult['a:ResponseType']._text === 'Success'
    ) {
      // update indicative enrichment as success
      await this.kycService.updateTransunionIndicativeEnrichment({
        transunion: {
          authenticated: false,
          indicativeEnrichmentSuccess: true,
        },
      });
      // now do the authentication
      return enrichment;
    } else {
      return;
    }
  }

  // async processIndicativeEnrichmentResponse(resp: string): Promise<boolean> {
  //   const enrichment: IIndicativeEnrichmentResponseSuccess = JSON.parse(
  //     JSON.parse(resp)['IndicativeEnrichmentResults']
  //   );
  //   if (
  //     enrichment['s:Envelope']['s:Body'].IndicativeEnrichmentResponse
  //       .IndicativeEnrichmentResult['a:ResponseType']._text === 'Success'
  //   ) {
  //     // update indicative enrichment as success
  //     await this.kycService.updateTransunionIndicativeEnrichment({
  //       transunion: {
  //         authenticated: false,
  //         indicativeEnrichmentSuccess: true,
  //       },
  //     });
  //     // now do the authentication
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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
