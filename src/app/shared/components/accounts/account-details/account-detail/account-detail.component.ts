import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  @Input() pages: any[] = [];
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
