import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'brave-base-exception-view',
  templateUrl: './base-exception.view.html',
})
export class BaseExceptionView implements OnInit {
  constructor(private router: Router, public route: ActivatedRoute) {}

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
