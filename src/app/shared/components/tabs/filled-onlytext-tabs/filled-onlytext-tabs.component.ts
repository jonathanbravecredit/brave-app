import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-filled-onlytext-tabs',
  templateUrl: './filled-onlytext-tabs.component.html',
})
export class FilledOnlytextTabsComponent implements OnInit {
  openTab = 1;
  constructor() {}

  ngOnInit(): void {}

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
