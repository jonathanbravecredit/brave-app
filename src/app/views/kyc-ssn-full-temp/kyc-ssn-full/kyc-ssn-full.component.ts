import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { KycService } from '@shared/services/kyc/kyc.service';

@Component({
  selector: 'brave-kyc-ssn-full',
  templateUrl: './kyc-ssn-full.component.html',
})
export class KycSsnFullComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private kycService: KycService
  ) {}

  ngOnInit(): void {
    this.kycService.activateStep(2);
  }

  goBack(): void {
    this.kycService.inactivateStep(2);
    this.location.back();
  }

  goToNext(): void {
    // need to add form validation before moving forward
    this.kycService.completeStep(2);
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }
}
