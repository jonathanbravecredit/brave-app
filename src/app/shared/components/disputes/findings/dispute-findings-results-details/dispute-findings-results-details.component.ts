import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_INVESTIGATION_RESULT_TYPES as defaultResultTypes } from './constants';
import { IInvestigationResultInfo } from './interfaces';

@Component({
  selector: 'brave-dispute-findings-results-details',
  templateUrl: './dispute-findings-results-details.component.html',
  styleUrls: ['./dispute-findings-results-details.component.css']
})
export class DisputeFindingsResultsDetailsComponent implements OnInit {
  @Input() resultCode: string | undefined;
  @Input() updatedValues: string[] = [];
  resultInfo: IInvestigationResultInfo | undefined;
  constructor() { }

  ngOnInit(): void {
    if (this.resultCode) {
      this.resultInfo = this.getResultInfoByResultCode(this.resultCode);
    }
  } 

  private getResultInfoByResultCode(code: string) {
    return defaultResultTypes.find(result => result.type === code);
  }
}
