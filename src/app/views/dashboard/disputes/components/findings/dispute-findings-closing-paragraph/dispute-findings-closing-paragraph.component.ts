import { Component, OnInit } from '@angular/core';
import { FINDINGS_CLOSING_CONTENT } from '@views/dashboard/disputes/components/findings/dispute-findings-closing-paragraph/content';

@Component({
  selector: 'brave-dispute-findings-closing-paragraph',
  templateUrl: './dispute-findings-closing-paragraph.component.html',
})
export class DisputeFindingsClosingParagraphComponent implements OnInit {
  content = FINDINGS_CLOSING_CONTENT;
  constructor() {}

  ngOnInit(): void {}
}
