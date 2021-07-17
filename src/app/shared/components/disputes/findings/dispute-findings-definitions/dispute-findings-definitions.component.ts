import { Component, OnInit } from '@angular/core';
import { DEFAULT_FINDINGS_DEFINITIONS as defaultDefinitions} from './constants';

@Component({
  selector: 'brave-dispute-findings-definitions',
  templateUrl: './dispute-findings-definitions.component.html',
  styleUrls: ['./dispute-findings-definitions.component.css']
})
export class DisputeFindingsDefinitionsComponent implements OnInit {
  definitions: { title: string; description: string }[] = defaultDefinitions;
  constructor() { }

  ngOnInit(): void {
  }

}
