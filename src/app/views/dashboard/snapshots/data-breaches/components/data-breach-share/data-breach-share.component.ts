import { Component, OnInit } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { dataBreachShareContent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-share/content';

@Component({
  selector: 'brave-data-breach-share',
  templateUrl: './data-breach-share.component.html',
})
export class DataBreachShareComponent implements OnInit {
  buttonConfig: IFilledOnlyTextButtonConfig = {
    buttonSize: 'sm',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: true,
  };
  content = dataBreachShareContent;
  constructor() {}

  ngOnInit(): void {}
}
