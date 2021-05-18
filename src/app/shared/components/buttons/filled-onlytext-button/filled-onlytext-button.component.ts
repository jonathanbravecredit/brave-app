import { Component, Input } from '@angular/core';

export interface IFilledOnlyTextButtonConfig {
  buttonSize: string;
  backgroundColor: string;
  activeColor: string;
  color: string;
}

@Component({
  selector: 'brave-filled-onlytext-button',
  templateUrl: './filled-onlytext-button.component.html',
})
export class FilledOnlytextButtonComponent {
  /**
   * @param config Input objctfor button customization
   * @param config.buttonSize 'sm', 'base', 'lg'
   * @param config.backgroundColor Any global color "e.g. bg-indigo-800"
   * @param config.activeColor Any global color "e.g. bg-indigo-900"
   * @param config.color Any global color
   */
  @Input() config: IFilledOnlyTextButtonConfig = {
    buttonSize: 'base',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
  };

  constructor() {}
}
