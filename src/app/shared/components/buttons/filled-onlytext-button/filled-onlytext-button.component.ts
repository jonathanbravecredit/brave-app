import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface IFilledOnlyTextButtonConfig {
  buttonSize: string;
  backgroundColor: string;
  activeColor: string;
  color: string;
  full?: boolean;
}

@Component({
  selector: 'brave-filled-onlytext-button',
  templateUrl: './filled-onlytext-button.component.html',
})
export class FilledOnlytextButtonComponent {
  /**
   * @param config Input objctfor button customization
   * @param config.buttonSize 'sm', 'base', 'lg', 'wide'
   * @param config.backgroundColor Any global color "e.g. bg-indigo-800"
   * @param config.activeColor Any global color "e.g. bg-indigo-900"
   * @param config.color Any global color
   */
  @Input() config: IFilledOnlyTextButtonConfig = {
    buttonSize: 'base',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: false,
  };

  @Input() disabled: boolean = false;

  constructor() { }

}
