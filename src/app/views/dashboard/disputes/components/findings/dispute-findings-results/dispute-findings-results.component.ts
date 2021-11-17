import { Component, OnInit } from '@angular/core';
import { FINDING_RESULTS_CONTENT } from '@views/dashboard/disputes/components/findings/dispute-findings-results/content';

@Component({
  selector: 'brave-dispute-findings-results',
  templateUrl: './dispute-findings-results.component.html',
  styleUrls: ['./dispute-findings-results.component.css'],
})
export class DisputeFindingsResultsComponent implements OnInit {
  content = FINDING_RESULTS_CONTENT;

  constructor() {}

  ngOnInit(): void {}
}
