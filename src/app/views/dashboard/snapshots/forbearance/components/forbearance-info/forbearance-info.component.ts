import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forbearanceInfoContent } from '@views/dashboard/snapshots/forbearance/components/forbearance-info/content';

@Component({
  selector: 'brave-forbearance-info',
  templateUrl: './forbearance-info.component.html',
})
export class ForbearanceInfoComponent implements OnInit {
  @Output() infoClick: EventEmitter<void> = new EventEmitter();
  content = forbearanceInfoContent;
  constructor() {}

  ngOnInit(): void {}
}
