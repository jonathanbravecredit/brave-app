import { Component } from "@angular/core";
import { DATA_BREACHES_CONTENT } from "../../data-breaches.content";
@Component({
  selector: "brave-data-breach-header",
  templateUrl: "./data-breach-header.component.html",
})
export class DataBreachHeaderComponent {
  DATA_BREACHES_CONTENT = DATA_BREACHES_CONTENT;
  constructor() {}
}
