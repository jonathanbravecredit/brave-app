import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-settings-option-list',
  templateUrl: './settings-option-list.component.html',
})
export class SettingsOptionListComponent implements OnInit {
  @Output() resetOptionClick: EventEmitter<void> = new EventEmitter();
  @Output() deactivateOptionClick: EventEmitter<void> = new EventEmitter();
  @Output() logoutOptionClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
