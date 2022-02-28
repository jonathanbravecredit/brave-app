import { Component, Input, OnInit } from '@angular/core';

export interface ICircleProgressStep {
  id: number;
  active: boolean;
  complete: boolean;
  name: string;
}
export interface ICircleChecktextProgressbarConfig {
  size: string;
}

@Component({
  selector: 'brave-circle-checktext-progressbar',
  templateUrl: './circle-checktext-progressbar.component.html',
})
export class CircleChecktextProgressbarComponent implements OnInit {
  @Input() config: ICircleChecktextProgressbarConfig = { size: 'base' };
  @Input() steps: ICircleProgressStep[] = [];
  lastIndex: number = -1;

  constructor() {}

  ngOnInit() {
    this.lastIndex = this.steps.length - 1;
  }
}
