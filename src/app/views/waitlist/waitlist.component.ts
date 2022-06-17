import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "brave-waitlist",
  templateUrl: "./waitlist.component.html",
})
export class WaitlistComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  routeToBrave(event: MouseEvent) {
    this.router.navigate(["./dashboard/init"]);
  }
}
