import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_INVESTIGATION_RESULT_TYPES_NEW } from './constants';
import { TInvestigationResultCode } from './interfaces';

@Component({
  selector: 'brave-dispute-findings-results-details',
  templateUrl: './dispute-findings-results-details.component.html',
})
export class DisputeFindingsResultsDetailsComponent implements OnInit {
  @Input() resultCode: TInvestigationResultCode | undefined;
  @Input() updatedValues: string[] = [];
  // resultInfo: IInvestigationResultInfo | undefined;
  resultTypes = DEFAULT_INVESTIGATION_RESULT_TYPES_NEW;
  constructor() {}

  ngOnInit(): void {}
}
