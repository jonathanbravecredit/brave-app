import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brave-simple-banner',
  templateUrl: './simple-banner.component.html',
})
export class SimpleBannerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  test() {
    this.router.navigate(['/dashboard/report/dispute/publicitem/error']);
  }
}
