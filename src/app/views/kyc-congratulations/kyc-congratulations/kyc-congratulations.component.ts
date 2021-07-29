import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brave-kyc-congratulations',
  templateUrl: './kyc-congratulations.component.html',
})
export class KycCongratulationsComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.goToNext();
    }, 3500);
  }

  goToNext(): void {
    this.router.navigate(['/dashboard']);
  }
}
