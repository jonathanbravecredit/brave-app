import { Component, Input, OnInit } from '@angular/core';
import { InitiativeTask } from '@shared/interfaces/progress-tracker.interface';

@Component({
  selector: 'brave-progress-tracker-header',
  templateUrl: './progress-tracker-header.component.html'
})
export class ProgressTrackerHeaderComponent implements OnInit {
  @Input() initiativeTask: InitiativeTask | undefined;

  constructor() { }

  ngOnInit(): void {}

}
