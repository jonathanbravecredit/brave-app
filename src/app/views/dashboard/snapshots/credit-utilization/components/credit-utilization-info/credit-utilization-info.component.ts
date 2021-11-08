import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { creditUtilizationInfoContent } from '@views/dashboard/snapshots/credit-utilization/components/credit-utilization-info/content';

@Component({
  selector: 'brave-credit-utilization-info',
  templateUrl: './credit-utilization-info.component.html',
})
export class CreditUtilizationInfoComponent implements OnInit {
  @Output() infoClick: EventEmitter<void> = new EventEmitter();
  content = creditUtilizationInfoContent;
  constructor() {}

  ngOnInit(): void {}
}
