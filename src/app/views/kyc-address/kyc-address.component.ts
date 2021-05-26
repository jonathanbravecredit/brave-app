import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KycService } from '@shared/services/kyc/kyc.service';

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private kycService: KycService
  ) {}

  ngOnInit(): void {
    this.kycService.activateStep(1);
  }

  goBack(): void {
    this.kycService.inactivateStep(1);
    this.location.back();
  }
  goToNext(): void {
    // need to add form validation before moving forward
    this.kycService.completeStep(1);
    this.router.navigate(['../identity'], { relativeTo: this.route });
  }
}
