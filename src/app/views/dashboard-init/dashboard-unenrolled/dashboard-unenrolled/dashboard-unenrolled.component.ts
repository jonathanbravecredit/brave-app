import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-dashboard-unenrolled',
  templateUrl: './dashboard-unenrolled.component.html',
})
export class DashboardUnenrolledComponent implements OnInit {
  @Input() userName: string = '';
  @Input() defaultMsg = 'Welcome back!';
  @Input() initialMsg: string = 'Welcome back!';
  @Input() lastUpdated = 'Today';

  constructor() {}

  ngOnInit(): void {
    if (this.userName) this.initialMsg = 'Welcome back, ' + this.userName;
  }

  onClickGetMyReport(): void {}
}
