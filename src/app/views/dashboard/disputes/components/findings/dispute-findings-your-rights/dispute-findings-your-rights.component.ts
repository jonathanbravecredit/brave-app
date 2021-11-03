import { Component, Input, OnInit } from '@angular/core';
import { FINDINGS_YOUR_RIGHTS } from '@views/dashboard/disputes/components/findings/dispute-findings-your-rights/content';

@Component({
  selector: 'brave-dispute-findings-your-rights',
  templateUrl: './dispute-findings-your-rights.component.html',
})
export class DisputeFindingsYourRightsComponent implements OnInit {
  @Input() stateOfResidence: string = '';
  content = FINDINGS_YOUR_RIGHTS;
  constructor() {}

  ngOnInit(): void {}
}
