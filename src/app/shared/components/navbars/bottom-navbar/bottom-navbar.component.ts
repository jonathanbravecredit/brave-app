import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DEFAULT_BOTTOM_NAVIGATION_ITEMS as navigationItems } from './constants';
import { IBottomNavbarItem } from './interfaces';

@Component({
  selector: 'brave-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {
  navigationItems: IBottomNavbarItem[] = navigationItems;
  currentActiveItemId: string = 'home';
  disableLocalNavigationHandler: boolean = false;
  disableEventEmitter: boolean = false;
  @Output() navigationTo: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }

  navigate(navigationItemName: string): void {
    if (!this.disableLocalNavigationHandler) {
      this.setActiveNavigationItem(navigationItemName);
      if (!this.disableEventEmitter) {
        this.navigationTo.emit(navigationItemName);
      }
    }
  }
  
  setActiveNavigationItem(navigationItemName: string): void {
    this.currentActiveItemId = navigationItemName;
  }
}
