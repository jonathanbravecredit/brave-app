import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import { dataBreachesPureContent } from '@views/dashboard/snapshots/data-breaches/data-breaches-pure/content';

@Component({
  selector: 'brave-data-breaches-pure',
  templateUrl: './data-breaches-pure.component.html',
})
export class DataBreachesPureComponent implements OnInit {
  @Input() breachCards: IBreachCard[] = [];
  content = dataBreachesPureContent;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToReport(): void {
    this.router.navigate(['/dashboard/report']);
  }
}
