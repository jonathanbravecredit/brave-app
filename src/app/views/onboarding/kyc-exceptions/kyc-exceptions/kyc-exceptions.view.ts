import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'brave-kyc-exceptions',
  templateUrl: './kyc-exceptions.view.html',
})
export class KycExceptionsView implements OnInit {
  defaultCode = '11'; // general app errod
  constructor(private router: Router, readonly route: ActivatedRoute) {}

  ngOnInit(): void {}

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
