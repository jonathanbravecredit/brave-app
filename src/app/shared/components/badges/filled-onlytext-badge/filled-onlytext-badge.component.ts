import { Component, Input } from '@angular/core';

export interface IFilledOnlytextBadgeConfig {
  size: string;
  backgroundColor: string;
  color: string;
}

@Component({
  selector: 'brave-filled-onlytext-badge',
  templateUrl: './filled-onlytext-badge.component.html',
})
export class FilledOnlytextBadgeComponent {
  @Input() config: IFilledOnlytextBadgeConfig = {
    size: 'base',
    backgroundColor: 'bg-indigo-200',
    color: 'text-indigo-800',
  };

  constructor() {}
}
