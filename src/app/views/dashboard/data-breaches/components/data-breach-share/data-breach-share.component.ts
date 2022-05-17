import { Component } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from "@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component";
import { DATA_BREACHES_CONTENT } from "../../data-breaches.content";
import { DataBreachesViewService } from '../../data-breaches-view.service';

@Component({
  selector: "brave-data-breach-share",
  templateUrl: "./data-breach-share.component.html",
})
export class DataBreachShareComponent {
  buttonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: "sm",
    backgroundColor: "bg-pink-500",
    activeColor: "bg-pink-500",
    color: "text-black",
    full: true,
  };
  DATA_BREACHES_CONTENT = DATA_BREACHES_CONTENT

  constructor(
    public dataBreachesViewService: DataBreachesViewService
  ) {}
}
