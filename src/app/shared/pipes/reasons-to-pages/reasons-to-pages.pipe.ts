import { Pipe, PipeTransform } from '@angular/core';
import { IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';
import { DisputeReasonPageComponent } from '@views/dashboard/disputes/components/dispute-reason-page/dispute-reason-page.component';

export interface IReasonsToPage {
  pages: DisputeReasonPageComponent[];
  data: { reasonCards: IDisputeReasonCard[] }[];
}

@Pipe({
  name: 'reasonsToPages',
})
export class ReasonsToPagesPipe implements PipeTransform {
  transform(reasonCards: IDisputeReasonCard[], pageBreak: number): IReasonsToPage {
    const cards = reasonCards.map((c, i) => {
      return { ...c, index: i };
    }); // layer in index to keep track
    let data: { reasonCards: IDisputeReasonCard[] }[] = [];
    let pages: any[] = [];
    while (cards.length > 0) {
      pages = [...pages, DisputeReasonPageComponent];
      data =
        cards.length < pageBreak * 2 && cards.length % pageBreak === 1
          ? [...data, { reasonCards: cards.splice(0, cards.length) }] // don't leave a page with just one
          : [...data, { reasonCards: cards.splice(0, pageBreak) }];
    }
    console.log('pages ==> ', { pages, data });
    return { pages, data };
  }
}
