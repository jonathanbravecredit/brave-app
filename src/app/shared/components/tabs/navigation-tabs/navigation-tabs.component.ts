import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'brave-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit {
  private $currentTab: BehaviorSubject<number> = new BehaviorSubject(1);
  currentTab = this.$currentTab.asObservable();
  constructor() {}

  ngOnInit(): void {}

  toggleTabs(tabNumber: number) {
    this.$currentTab.next(tabNumber);
  }
}
