import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-outline-tooltip',
  templateUrl: './outline-tooltip.component.html',
})
export class OutlineTooltipComponent implements OnInit {
  @Input() title: string = 'Message title goes here';
  @Input() body: string =
    'Something very long and profound to direct the user to the next logical step in a sequence of illogical steps such is life.';
  @Input() position: string = 'top';

  constructor() {}

  ngOnInit(): void {}
}
