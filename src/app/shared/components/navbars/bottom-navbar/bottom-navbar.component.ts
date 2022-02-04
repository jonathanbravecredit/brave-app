import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { NavBarInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { DEFAULT_BOTTOM_NAVIGATION_ITEMS as navigationItems } from './constants';
import { IBottomNavbarItem } from './interfaces';
import * as appDataActions from '@store/app-data/app-data.actions';

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

  /**
   * @param item
   * ex:
   *  - home
   *  - report
   *  - disputes
   *  - settings
   */
  badgeClicked(item: IBottomNavbarItem): void {
    switch (item.name.toLowerCase()) {
      case 'init':
        this.toggleDisputesBadge({ home: { badge: false } });
        break;
      case 'report':
        this.toggleDisputesBadge({ report: { badge: false } });
        break;
      case 'disputes':
        this.toggleDisputesBadge({ disputes: { badge: false } });
        break;
      case 'settings':
        this.toggleDisputesBadge({ settings: { badge: false } });
        break;
      default:
        break;
    }
  }

  toggleDisputesBadge(nav: Partial<NavBarInput>): void {
    this.store
      .dispatch(new appDataActions.UpdateNavBar(nav))
      .toPromise()
      .then((state: { appData: UpdateAppDataInput }) => {
        //send all the nav bar data back
        const navBar = state.appData.navBar;
        this.trans.sendTransunionAPICall('UpdateNavBar', JSON.stringify({ navBar }));
      });
  }

  pointerDownHandler(id: string) {
    this.clicked = id;
    this.currentActiveItemId = id;
  }

  pointerUpHandler() {
    this.clicked = '';
  }
}
