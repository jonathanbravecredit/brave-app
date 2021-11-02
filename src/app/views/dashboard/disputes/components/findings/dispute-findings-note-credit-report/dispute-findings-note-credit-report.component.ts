import { Component, OnInit } from '@angular/core';
import { NOTE_CREDIT_REPORT_CONTENT } from '@views/dashboard/disputes/components/findings/dispute-findings-note-credit-report/content';

@Component({
  selector: 'brave-dispute-findings-note-credit-report',
  templateUrl: './dispute-findings-note-credit-report.component.html',
})
export class DisputeFindingsNoteCreditReportComponent implements OnInit {
  content = NOTE_CREDIT_REPORT_CONTENT;
  constructor() {}

  ngOnInit(): void {}
}
