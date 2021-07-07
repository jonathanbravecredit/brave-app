import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';

@Component({
  selector: 'brave-conditional-term',
  templateUrl: './conditional-term.component.html',
  styleUrls: ['./conditional-term.component.css']
})
export class ConditionalTermComponent implements OnInit {
  @Input() title: string = '';
  @Input() termDescription: string = '';
  @Output() accepted: EventEmitter<void> = new EventEmitter(); 
  isConfirmed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setValue(e: any): void {
    this.isConfirmed = e.target.checked;
  }

  getButtonConfig(): IFilledOnlyTextButtonConfig {
    let defaultConfig: IFilledOnlyTextButtonConfig = {
      buttonSize: 'base',
      backgroundColor: 'bg-indigo-800',
      activeColor: 'bg-indigo-900',
      color: 'text-white',
      full: false
    }

    if (this.isConfirmed) {
      return defaultConfig;
    } else {
      defaultConfig.backgroundColor = 'bg-black';
      defaultConfig.activeColor = 'bg-black';
      return defaultConfig;
    }
  }

  getBtnInteractionClass(): string {
    return this.isConfirmed === false ? 'pointer-events-none' : '';
  }
}
