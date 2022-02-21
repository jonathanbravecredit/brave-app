import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-progress-tracker-disclaimer',
  templateUrl: './progress-tracker-disclaimer.component.html',
})
export class ProgressTrackerDisclaimerComponent implements OnInit {
  disclaimerText: string =
    '*Individual results will vary. Based on results of Brave Credit customers who reviewed their credit reports and submitted disputes on their credit report information, or succesfully completed a 12 month Credit Builder Account from Self from 1/1/2020 to 10/31/2021. Making on-time payments of other accounts is critical to credit wellness and growth.';

  constructor() {}

  ngOnInit(): void {}
}
