import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brave-kyc-congratulations',
  templateUrl: './kyc-congratulations.component.html',
})
export class KycCongratulationsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToNext(): void {
    this.router.navigate(['/dashboard']);
  }
}
