import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { NavBarInput } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { DEFAULT_BOTTOM_NAVIGATION_ITEMS as navigationItems } from './constants';
import { IBottomNavbarItem } from './interfaces';
import * as appDataActions from '@store/app-data/app-data.actions'

@Component({
  selector: 'brave-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css'],
})
export class BottomNavbarComponent implements OnInit {
  navigationItems: IBottomNavbarItem[] = navigationItems;
  currentActiveItemId: string = 'init';
  disableLocalNavigationHandler: boolean = false;
  disableEventEmitter: boolean = false;
  @Output() navigationTo: EventEmitter<string> = new EventEmitter();
  clicked: string = '';
  navBarData: NavBarInput | null | undefined;

  constructor(private state: StateService, private trans: TransunionService, private store: Store) {
    this.state.state$.subscribe((r) => {
      this.navBarData = r.appData.navBar;
    });
  }

  ngOnInit(): void {}

  navigate(navigationItemName: string): void {
    if (!this.disableLocalNavigationHandler) {
      if (!this.disableEventEmitter) {
        this.navigationTo.emit(navigationItemName);
      }
    }
  }

  badgeClicked(item: IBottomNavbarItem): void {
    switch (item.name.toLowerCase()) {
      case 'disputes':
        this.toggleDisputesBadge();
        break;

      default:
        break;
    }
  }

  toggleDisputesBadge(): void {
    this.store.dispatch(new appDataActions.UpdateNavBar(false));
    this.trans.sendTransunionAPICall('UpdateNavBar', JSON.stringify({ toggle: false }));
  }

  pointerDownHandler(id: string) {
    (this.clicked = id);
    (this.currentActiveItemId = id);
  }

  pointerUpHandler() {
    this.clicked = '';
  }
}
