import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { dataBreachCardContent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/content';

@Component({
  selector: 'brave-data-breach-card',
  templateUrl: './data-breach-card.component.html',
})
export class DataBreachCardComponent implements OnInit {
  @Input() subscriber: string | undefined = 'Unknown';
  @Input() paragraphs: string[] | undefined = ['Unknown'];
  @Input() reason: string | undefined = 'Unknown';
  @Output() closeClick: EventEmitter<void> = new EventEmitter();

  content = dataBreachCardContent;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToReport(): void {
    this.router.navigate(['/dashboard/report']);
  }
}
