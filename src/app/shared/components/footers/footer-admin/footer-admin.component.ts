import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-footer-admin',
  templateUrl: './footer-admin.component.html',
})
export class FooterAdminComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
