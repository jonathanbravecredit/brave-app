import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'brave-kyc-ssn',
  templateUrl: './kyc-ssn.component.html',
})
export class KycSsnComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  goToNext(): void {
    // need to add form validation before moving forward
    this.router.navigate(['../verify'], { relativeTo: this.route });
  }
}
