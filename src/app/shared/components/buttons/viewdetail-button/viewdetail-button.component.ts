import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export type ViewDetailOrientation =
  | 'horizontal-left'
  | 'horizontal-right'
  | 'vertical-top'
  | 'vertical-bottom'
  | 'static';

@Component({
  selector: 'brave-viewdetail-button',
  templateUrl: './viewdetail-button.component.html',
})
export class ViewdetailButtonComponent implements OnInit {
  @Input() size = '';
  @Input() orientation: ViewDetailOrientation = 'vertical-bottom';
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();
  open: boolean = false;
  open$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit(): void {}
}
