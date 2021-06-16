import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { AgenciesState, AgenciesStateModel } from '@store/agencies';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent implements OnInit, OnDestroy {
  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  constructor() {
    this.agenciesSub$ = this.agencies$
      .pipe(take(1))
      .subscribe((agencies: AgenciesStateModel) => {
        console.log('agencies', agencies);
        console.log('tu', agencies.transunion);
        console.log('mergeReport', agencies.transunion?.enrollMergeReport);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
  }
}
