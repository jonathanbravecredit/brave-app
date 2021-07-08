import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'brave-viewdetail-button',
  templateUrl: './viewdetail-button.component.html',
})
export class ViewdetailButtonComponent implements OnInit {
  @Input() size = '';
  @Input() horizontal: boolean = false;
  open: boolean = false;
  open$: Subject<boolean> = new Subject();
  constructor() {}

  ngOnInit(): void {}
}
