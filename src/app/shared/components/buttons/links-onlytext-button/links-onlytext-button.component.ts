import { Component, Input, OnInit } from '@angular/core';

export interface ILinksOnlyTextButtonConfig {
  buttonSize: string;
  color: string;
}

@Component({
  selector: 'brave-links-onlytext-button',
  templateUrl: './links-onlytext-button.component.html',
})
export class LinksOnlytextButtonComponent {
  /**
   * @param config Input objctfor button customization
   * @param config.buttonSize 'sm', 'base', 'lg'
   * @param config.color Any global color
   */
  @Input() config: ILinksOnlyTextButtonConfig = {
    buttonSize: 'base',
    color: 'text-indigo-800',
  };

  constructor() {}
}
