import { Component, Input, OnInit } from '@angular/core';
import { FINDINGS_CONTACT_INFO } from '@views/dashboard/disputes/components/findings/dispute-findings-contact-info/content';

@Component({
  selector: 'brave-dispute-findings-contact-info',
  templateUrl: './dispute-findings-contact-info.component.html',
})
export class DisputeFindingsContactInfoComponent implements OnInit {
  @Input() fileIdentificationNumber: string = '';
  content = FINDINGS_CONTACT_INFO;

  constructor() {}

  ngOnInit(): void {}
}
