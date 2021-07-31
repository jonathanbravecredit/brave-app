import { Component, OnInit, Input } from '@angular/core';
import { IMenuDropdown } from '@shared/components/dropdowns/popdowns/menu-dropdown/menu-dropdown.component';

@Component({
  selector: 'brave-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
})
export class DashboardNavbarComponent implements OnInit {
  @Input() isBackButton: boolean = false;
  public navbarOpen = false;
  public menuOne: IMenuDropdown = {
    menu: 'Discover',
    submenus: [
      { submenu: 'Sub 1', route: '/', group: 'Group 1' },
      { submenu: 'Sub 2', route: '/' },
      { submenu: 'Sub 3', route: '/' },
      { submenu: 'Sub 4', route: '/' },
      { submenu: 'Sub 5', route: '/', break: true },
      { submenu: 'Sub 6', route: '/', group: 'Group 2' },
      { submenu: 'Sub 7', route: '/' },
      { submenu: 'Sub 8', route: '/', break: true },
      { submenu: 'Sub 9', route: '/', group: 'Group 3' },
      { submenu: 'Sub 10', route: '/' },
    ],
  };

  public menuTwo: IMenuDropdown = {
    menu: 'Profile',
    submenus: [
      { submenu: 'Sub 1', route: '/', group: 'Group 1' },
      { submenu: 'Sub 2', route: '/' },
      { submenu: 'Sub 3', route: '/' },
      { submenu: 'Sub 4', route: '/' },
      { submenu: 'Sub 5', route: '/', break: true },
      { submenu: 'Sub 6', route: '/', group: 'Group 2' },
      { submenu: 'Sub 7', route: '/' },
      { submenu: 'Sub 8', route: '/', break: true },
      { submenu: 'Sub 9', route: '/', group: 'Group 3' },
      { submenu: 'Sub 10', route: '/' },
    ],
  };

  public menuThree: IMenuDropdown = {
    menu: 'Settings',
    submenus: [
      { submenu: 'Sub 1', route: '/', group: 'Group 1' },
      { submenu: 'Sub 2', route: '/' },
      { submenu: 'Sub 3', route: '/' },
      { submenu: 'Sub 4', route: '/' },
      { submenu: 'Sub 5', route: '/', break: true },
      { submenu: 'Sub 6', route: '/', group: 'Group 2' },
      { submenu: 'Sub 7', route: '/' },
      { submenu: 'Sub 8', route: '/', break: true },
      { submenu: 'Sub 9', route: '/', group: 'Group 3' },
      { submenu: 'Sub 10', route: '/' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
