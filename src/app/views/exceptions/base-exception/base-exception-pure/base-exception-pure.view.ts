import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-base-exception-pure-view',
  templateUrl: './base-exception-pure.view.html'
})
export class BaseExceptionPureView implements OnInit {
  @Input() code: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
