import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-progress-tracker-disclaimer',
  templateUrl: './progress-tracker-disclaimer.component.html',
})
export class ProgressTrackerDisclaimerComponent implements OnInit {
  disclaimerText: string =
    '*Individual results will vary, and results or improvements are not guaranteed. Estimates based on results of Brave Credit customers who reviewed their credit reports and submitted disputes on their credit report information, or successfully completed a 12 month Credit Builder Account from Self from 1/1/2020 to 10/31/2021. Making on-time payments of open accounts is critical to credit wellness and growth, and every individual’s financial profile is different.';

  constructor() {}

  ngOnInit(): void {}
}
