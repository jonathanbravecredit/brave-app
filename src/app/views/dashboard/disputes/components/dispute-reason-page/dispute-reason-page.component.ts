import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';
import { DisputeReasonPageService } from '@views/dashboard/disputes/components/dispute-reason-page/dispute-reason-page.service';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'brave-dispute-reason-page',
  templateUrl: './dispute-reason-page.component.html',
})
export class DisputeReasonPageComponent implements OnInit, OnDestroy {
  @Input() reasonCards: IDisputeReasonCard[] = [];
  cardSelectedSub$: Subscription | undefined;

  constructor(private reasonPageService: DisputeReasonPageService) {
    this.cardSelectedSub$ = this.reasonPageService.cardDeselected$
      .pipe(
        filter((c) => Object.keys(c).length > 0),
        tap((c) => this.deselectCard(c)),
      )
      .subscribe();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.cardSelectedSub$) this.cardSelectedSub$.unsubscribe();
  }

  onToggleClick(card: IDisputeReasonCard) {
    console.log('toggle clicked ==> ', card);
    this.reasonPageService.cardSelected$.next(card);
  }

  deselectCard(card: IDisputeReasonCard) {
    console.log('deselect ==> ', card, this.reasonCards);
    this.reasonCards = this.reasonCards.map((c) => {
      if (c.reason.id === card.reason.id) {
        return {
          ...c,
          selected: !c.selected,
        };
      } else {
        return c;
      }
    });
  }
}
