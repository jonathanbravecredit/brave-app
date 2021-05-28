import { Component, Input, OnInit } from '@angular/core';

export interface IProgressStep {
  id: number;
  active: boolean;
  complete: boolean;
  name: string;
}
export interface IFilledChecktextProgressbarConfig {
  size: string;
}

@Component({
  selector: 'brave-filled-checktext-progressbar',
  templateUrl: './filled-checktext-progressbar.component.html',
})
export class FilledChecktextProgressbarComponent {
  @Input() config: IFilledChecktextProgressbarConfig = { size: 'base' };
  @Input() steps: IProgressStep[] = [];

  constructor() {}
}
