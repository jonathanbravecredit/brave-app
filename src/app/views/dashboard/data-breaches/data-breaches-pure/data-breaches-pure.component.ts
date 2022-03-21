import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IBreachCard } from '@shared/interfaces/breach-card.interface';
import { DataBreachListComponent } from '@views/dashboard/data-breaches/components/data-breach-list/data-breach-list.component';
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
