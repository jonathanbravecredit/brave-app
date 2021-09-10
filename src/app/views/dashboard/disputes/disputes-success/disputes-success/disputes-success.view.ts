import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brave-disputes-success',
  templateUrl: './disputes-success.view.html',
})
export class DisputesSuccessView {
  constructor(private router: Router) {}

  onGoBackClick(): void {
    this.router.navigate(['/dashboard/init']);
  }
}
