import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-settings-option',
  templateUrl: './settings-option.component.html',
  styleUrls: ['./settings-option.component.css']
})
export class SettingsOptionComponent implements OnInit {
  @Input() title: string = '';
  @Input() iconName: string = '';
  @Input() successMessage: string = '';
  @Input() hide: boolean = false;
  @Input() id: string = '';
  @Input() disableNavigation: boolean = false;
  @Output() navigated: EventEmitter<string> = new EventEmitter();
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  isDetailDescriptionOpened: boolean = false;
  isSettingUpdated: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.isDetailDescriptionOpened = false;
    this.navigated.emit('initial');
  }

  setSuccess(): void {
    this.isSettingUpdated = true;
    this.isDetailDescriptionOpened = false;
  }

  navigateToDescription(): void {
    if (this.disableNavigation) {
      this.clicked.emit(this.id);
    } else {
      this.isDetailDescriptionOpened = true;
      this.navigated.emit(this.id);
    }
  }
}
