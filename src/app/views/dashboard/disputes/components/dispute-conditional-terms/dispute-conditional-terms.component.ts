import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { TERMS_CONDITIONS } from '@views/dashboard/disputes/components/dispute-conditional-terms/content';

@Component({
  selector: 'brave-dispute-conditional-terms',
  templateUrl: './dispute-conditional-terms.component.html',
})
export class DisputeConditionalTermsComponent implements OnInit {
  @Output() accepted: EventEmitter<void> = new EventEmitter();

  confirmed: boolean = false;
  content = TERMS_CONDITIONS;

  constructor() {}

  ngOnInit(): void {}

  setValue(e: any): void {
    this.confirmed = e.target.checked;
  }

  getButtonConfig(): IFilledOnlyTextButtonConfig {
    let defaultConfig: IFilledOnlyTextButtonConfig = {
      buttonSize: 'base',
      backgroundColor: 'bg-indigo-800',
      activeColor: 'bg-indigo-900',
      color: 'text-white',
      full: false,
    };

    if (this.confirmed) {
      return defaultConfig;
    } else {
      defaultConfig.backgroundColor = 'bg-black';
      defaultConfig.activeColor = 'bg-black';
      return defaultConfig;
    }
  }

  getBtnInteractionClass(): string {
    return this.confirmed === false ? 'pointer-events-none' : '';
  }
}
