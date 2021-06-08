import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit {
  openTab = 1;
  constructor() {}

  ngOnInit(): void {}

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
