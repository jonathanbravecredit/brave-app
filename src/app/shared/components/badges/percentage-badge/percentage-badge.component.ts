import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "brave-percentage-badge",
  templateUrl: "./percentage-badge.component.html",
})
export class PercentageBadgeComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() label: string | undefined;
  @Input() color: string | undefined;
  @Input() size: 'base' | 'small' | 'large' = 'base';
  @Input() position : 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  @Input() selected: boolean = false

  constructor() {}

  ngOnInit(): void {}
}
