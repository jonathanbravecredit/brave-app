import { Component, OnInit } from '@angular/core';
import { StateService } from '@shared/services/state/state.service';

@Component({
  selector: 'brave-kyc-retry',
  templateUrl: './kyc-retry.component.html',
})
export class KycRetryComponent implements OnInit {
  constructor(private statesvc: StateService) {}

  ngOnInit(): void {
    this.statesvc.resetOnboarding();
  }
}
