import { Component, OnInit } from '@angular/core';
import { dataBreachHeaderContent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-header/content';

@Component({
  selector: 'brave-data-breach-header',
  templateUrl: './data-breach-header.component.html',
})
export class DataBreachHeaderComponent implements OnInit {
  content = dataBreachHeaderContent;
  constructor() {}

  ngOnInit(): void {}
}
