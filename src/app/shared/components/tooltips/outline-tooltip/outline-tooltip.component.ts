import { Component, Input, OnInit } from '@angular/core';
import { Placement } from '@popperjs/core';

@Component({
  selector: 'brave-outline-tooltip',
  templateUrl: './outline-tooltip.component.html',
})
export class OutlineTooltipComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() body: string = 'Body';
  @Input() position: Placement = 'top';

  constructor() {}

  ngOnInit(): void {}
}
