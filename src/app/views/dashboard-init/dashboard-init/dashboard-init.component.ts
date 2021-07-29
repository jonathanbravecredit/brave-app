import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'brave-dashboard-init',
  templateUrl: './dashboard-init.component.html',
})
export class DashboardInitComponent {
  isEnrolled: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToReport() {
    this.router.navigate(['../report'], { relativeTo: this.route });
  }
}
