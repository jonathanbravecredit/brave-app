import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-settings-warning',
  templateUrl: './settings-warning.component.html',
})
export class SettingsWarningComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string | undefined;
  @Input() subtext: string | undefined;
  @Output() closeClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
