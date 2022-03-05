import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-kyc-congratulations',
  templateUrl: './kyc-congratulations.component.html',
})
export class KycCongratulationsComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.goToNext();
    }, 3500);
  }

  goToNext(): void {
    this.router.navigate([routes.root.dashboard.init.full]);
  }
}
