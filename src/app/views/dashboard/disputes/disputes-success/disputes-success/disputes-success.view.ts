import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";

@Component({
  selector: "brave-disputes-success",
  templateUrl: "./disputes-success.view.html",
})
export class DisputesSuccessView {
  constructor(private router: Router) {}

  onGoBackClick(): void {
    this.router.navigate([routes.root.children.dashboard.children.init.full]);
  }
}
