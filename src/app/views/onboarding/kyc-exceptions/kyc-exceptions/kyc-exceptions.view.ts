import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleErrorEvents as gtErrs } from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';

@Component({
  selector: 'brave-kyc-exceptions',
  templateUrl: './kyc-exceptions.view.html',
})
export class KycExceptionsView implements OnInit {
  defaultCode = '11'; // general app errod
  constructor(private router: Router, readonly route: ActivatedRoute, private google: GoogleService) {}

  ngOnInit(): void {
    this.google.fireErrorEvent(gtErrs.ApiTechnicalIssue);
  }

  onActionButtonClicked(route: string): void {
    // Remove query params
    this.router.navigate([`${route}`], {
      queryParams: {
        code: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
