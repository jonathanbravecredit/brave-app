import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-forbearance-info',
  templateUrl: './forbearance-info.component.html',
})
export class ForbearanceInfoComponent implements OnInit {
  @Output() clickedInfo: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
