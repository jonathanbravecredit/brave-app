import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_FINDINGS_DEFINITIONS as defaultDefinitions } from './constants';
import { IFindingsDefinition } from './interfaces';

@Component({
  selector: 'brave-dispute-findings-definitions',
  templateUrl: './dispute-findings-definitions.component.html',
})
export class DisputeFindingsDefinitionsComponent implements OnInit {
  @Input() type: 'public-records' | 'accounts' = 'accounts';
  definitions: IFindingsDefinition[] = [];

  constructor() {}

  ngOnInit(): void {
    this.definitions = defaultDefinitions[this.type];
  }
}
