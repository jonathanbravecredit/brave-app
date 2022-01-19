import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Store } from '@ngxs/store';
import { NavBarInput } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { PartialObserver } from 'rxjs';
import { DEFAULT_BOTTOM_NAVIGATION_ITEMS as navigationItems } from './constants';
import { IBottomNavbarItem } from './interfaces';

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

  constructor(private state: StateService) {
    this.state.state$.subscribe((r) => {
      this.navBarData = r.appData.navBar;
    });
  }

  ngOnInit(): void {
    console.log('STATEX', this.navBarData);
  }

  navigate(navigationItemName: string): void {
    if (!this.disableLocalNavigationHandler) {
      if (!this.disableEventEmitter) {
        this.navigationTo.emit(navigationItemName);
      }
    }
  }

  pointerDownHandler(id: string) {
    (this.clicked = id), (this.currentActiveItemId = id);
  }

  pointerUpHandler() {
    this.clicked = '';
  }
}
