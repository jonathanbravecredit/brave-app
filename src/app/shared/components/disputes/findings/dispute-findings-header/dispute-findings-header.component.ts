import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-dispute-findings-header',
  templateUrl: './dispute-findings-header.component.html',
})
export class DisputeFindingsHeaderComponent implements OnInit {
  @Input() reportCreatedAt: string | undefined;
  @Input() fileIdentificationNumber: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
