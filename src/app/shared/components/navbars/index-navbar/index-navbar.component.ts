import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-index-navbar',
  templateUrl: './index-navbar.component.html',
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
