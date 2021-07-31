import { Component, Input, OnInit } from '@angular/core';

export interface IOutlineOnlyTextButtonConfig {
  buttonSize: string;
  borderColor: string;
  activeColor: string;
  hoverColor: string;
  color: string;
}

@Component({
  selector: 'brave-outline-onlytext-button',
  templateUrl: './outline-onlytext-button.component.html',
})
export class OutlineOnlytextButtonComponent {
  /**
   * @param config Input object for button customization
   * @param config.buttonSize 'sm', 'base', 'lg'
   * @param config.borderColor Any global color "e.g. border-indigo-800"
   * @param config.activeColor Any global color "e.g. bg-indigo-900"
   * @param config.hoverColor Any global color "e.g. bg-indigo-800"
   * @param config.color Any global color "e.g. text-indigo-900"
   */
  @Input() config: IOutlineOnlyTextButtonConfig = {
    buttonSize: 'base',
    borderColor: 'border-indigo-800',
    activeColor: 'bg-indigo-900',
    hoverColor: 'bg-indigo-800',
    color: 'text-indigo-800',
  };

  constructor() {}
}
