import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-filled-spinning-button',
  templateUrl: './filled-spinning-button.component.html',
})
export class FilledSpinningButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
