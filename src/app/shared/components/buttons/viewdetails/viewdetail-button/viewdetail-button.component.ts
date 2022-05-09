import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'brave-viewdetail-button',
  templateUrl: './viewdetail-button.component.html',
})
export class ViewdetailButtonComponent implements OnInit {
  @Input() size = '';
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();
  open: boolean = false;
  open$: Subject<boolean> = new Subject();
  constructor() {}

  ngOnInit(): void {}
}
