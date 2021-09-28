import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { GooglePageViewEvents as gtEvts } from '@shared/services/analytics/google/constants';

@Component({
  selector: 'brave-kyc-congratulations',
  templateUrl: './kyc-congratulations.component.html',
})
export class KycCongratulationsComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private google: GoogleService) {}

  ngOnInit(): void {
    this.google.firePageViewEvent(gtEvts.OnboardingCongratulations);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.goToNext();
    }, 3500);
  }

  goToNext(): void {
    this.router.navigate(['/dashboard']);
  }
}
