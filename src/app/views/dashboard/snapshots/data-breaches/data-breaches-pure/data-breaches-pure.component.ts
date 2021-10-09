import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import { DataBreachListComponent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-list/data-breach-list.component';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'brave-data-breaches-pure',
  templateUrl: './data-breaches-pure.component.html',
})
export class DataBreachesPureComponent implements AfterViewInit, OnDestroy {
  @Input() breachCards: IBreachCard[] = [];
  @ViewChild(DataBreachListComponent) list: DataBreachListComponent | undefined;
  @Output() cardClick: EventEmitter<number> = new EventEmitter();
  listSub$: Subscription | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.listSub$ = this.list?.closeClick.pipe(tap((i) => this.cardClick.emit(i))).subscribe();
  }

  ngOnDestroy(): void {
    if (this.listSub$) this.listSub$.unsubscribe();
  }
}
