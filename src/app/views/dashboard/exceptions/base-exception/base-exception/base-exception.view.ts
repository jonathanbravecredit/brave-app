import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_EXCEPTION } from '@shared/components/exceptions/base-exception/constants';

@Component({
  selector: 'brave-base-exception-view',
  templateUrl: './base-exception.view.html',
})
export class BaseExceptionView implements OnInit {
  defaultCode = DEFAULT_EXCEPTION.code;
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
