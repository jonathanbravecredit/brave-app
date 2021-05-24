import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

export interface ISubmenuItem {
  submenu: string;
  route: string;
  group?: string;
  break?: boolean;
}
export interface IMenuDropdown {
  menu: string;
  submenus?: ISubmenuItem[];
}

@Component({
  selector: 'brave-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
})
export class MenuDropdownComponent implements OnInit {
  @Input() config: IMenuDropdown = {
    menu: 'Menu',
    submenus: [
      { submenu: 'Sub 1', route: '/submenu1', group: 'Group 1' },
      { submenu: 'Sub 2', route: '/submenu2' },
      { submenu: 'Sub 3', route: '/submenu3' },
      { submenu: 'Sub 4', route: '/submenu4' },
      { submenu: 'Sub 5', route: '/submenu5', break: true },
      { submenu: 'Sub 6', route: '/submenu6', group: 'Group 2' },
      { submenu: 'Sub 7', route: '/submenu7' },
      { submenu: 'Sub 8', route: '/submenu8', break: true },
      { submenu: 'Sub 9', route: '/submenu9', group: 'Group 3' },
      { submenu: 'Sub 10', route: '/submenu10' },
    ],
  };
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef: ElementRef;
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef: ElementRef;
  ngOnInit() {}
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: 'bottom-start',
      }
    );
  }
}
