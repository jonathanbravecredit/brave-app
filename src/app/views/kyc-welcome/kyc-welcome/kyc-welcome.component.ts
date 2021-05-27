import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KycService } from '@shared/services/kyc/kyc.service';

@Component({
  selector: 'brave-kyc-welcome',
  templateUrl: './kyc-welcome.component.html',
})
export class KycWelcomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kycService: KycService
  ) {}

  ngOnInit(): void {
    this.kycService.activateStep(0);
  }

  goToNext(): void {
    // need to add form validation before moving forward
    this.kycService.completeStep(0);
    this.router.navigate(['../address'], { relativeTo: this.route });
  }
}
