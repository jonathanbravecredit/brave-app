import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-notification-badge',
  templateUrl: './notification-badge.component.html'
})

export class NotificationBadgeComponent implements OnInit {
  @Input() text: string = ''
  @Input() backgroundColor: string = '#D714DB'
  @Input() top: string = '0';
  @Input() left: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
