import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { KycService } from '@shared/services/kyc/kyc.service';

@Component({
  selector: 'brave-kyc-phonenumber',
  templateUrl: './kyc-phonenumber.component.html',
})
export class KycPhonenumberComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private kycService: KycService
  ) {}

  ngOnInit(): void {
    this.kycService.activateStep(3);
  }

  goBack(): void {
    this.kycService.inactivateStep(3);
    this.location.back();
  }
  goToNext(): void {
    // need to add form validation before moving forward
    this.router.navigate(['../code'], { relativeTo: this.route });
  }
}
