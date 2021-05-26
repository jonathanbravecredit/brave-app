import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { KycService } from '@shared/services/kyc/kyc.service';

type KycIdverificationState = 'init' | 'sent' | 'error';

@Component({
  selector: 'brave-kyc-idverification',
  templateUrl: './kyc-idverification.component.html',
})
export class KycIdverificationComponent implements OnInit {
  @Input() state: KycIdverificationState = 'init';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private kycService: KycService
  ) {}

  ngOnInit(): void {}

  resendCode(): void {
    // resubmit code to backend
    this.state = 'sent';
  }

  goBack(): void {
    this.kycService.inactivateStep(3);
    this.location.back();
  }

  goToNext(): void {
    // need to add form validation or submit to backend before moving forward
    this.kycService.completeStep(3);
    this.router.navigate(['../congratulations'], { relativeTo: this.route });
  }
}
