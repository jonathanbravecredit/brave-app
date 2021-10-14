import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-dispute-findings-contact-info',
  templateUrl: './dispute-findings-contact-info.component.html',
})
export class DisputeFindingsContactInfoComponent implements OnInit {
  @Input() fileIdentificationNumber: string = '';

  constructor() {}

  ngOnInit(): void {}
}
