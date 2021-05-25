import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'brave-kyc-address',
  templateUrl: './kyc-address.component.html',
})
export class KycAddressComponent implements OnInit {
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
    this.router.navigate(['../identity'], { relativeTo: this.route });
  }
}
