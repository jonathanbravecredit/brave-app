import { Component, Input, OnInit } from '@angular/core';
import { InitiativeTask } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';

@Component({
  selector: 'brave-progress-tracker-header',
  templateUrl: './progress-tracker-header.component.html'
})
export class ProgressTrackerHeaderComponent implements OnInit {
  @Input() primaryTask: InitiativeTask | undefined;

  constructor() { }

  ngOnInit(): void {}

}
