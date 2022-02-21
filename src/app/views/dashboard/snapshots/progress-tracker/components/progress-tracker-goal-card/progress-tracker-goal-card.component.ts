import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-progress-tracker-goal-card',
  templateUrl: './progress-tracker-goal-card.component.html'
})
export class ProgressTrackerGoalCardComponent implements OnInit {
  @Input() goal: any

  constructor() { }

  ngOnInit(): void {
  }

}
