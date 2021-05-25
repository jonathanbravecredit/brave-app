import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location
  ) {}

  ngOnInit(): void {}

  resendCode(): void {
    // resubmit code to backend
    this.state = 'sent';
  }

  goBack(): void {
    this.location.back();
  }

  goToNext(): void {
    // need to add form validation or submit to backend before moving forward
    this.router.navigate(['../congratulations'], { relativeTo: this.route });
  }
}
