import { Component, Input, OnInit } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'brave-progress-tracker-goal-card',
  templateUrl: './progress-tracker-goal-card.component.html',
  animations: [
    trigger('openClose', [
      state('closed', style({
        maxHeight: '0vh'
      })),
      state('open', style({
        maxHeight: '100vh'
      })),
      transition('open => closed', [
        animate('0.5s linear')
      ]),
      transition('closed => open', [
        animate('0.5s linear')
      ]),
    ])
  ]
})
export class ProgressTrackerGoalCardComponent implements OnInit {
  @Input() goal: any
  expanded: boolean = false
  config: IFilledOnlyTextButtonConfig = {
    buttonSize: 'lg',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeExpand() {
    this.expanded = !this.expanded
  }

  clickYes() {

  }

  clickNo() {

 }
}
