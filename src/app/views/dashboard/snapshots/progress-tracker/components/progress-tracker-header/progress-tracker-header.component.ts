import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-progress-tracker-header',
  templateUrl: './progress-tracker-header.component.html'
})
export class ProgressTrackerHeaderComponent implements OnInit {
  @Input() currentGoal: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
