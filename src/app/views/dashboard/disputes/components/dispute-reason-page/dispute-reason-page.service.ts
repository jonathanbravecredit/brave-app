import { Injectable } from '@angular/core';
import { IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisputeReasonPageService {
  cardSelected$ = new BehaviorSubject<IDisputeReasonCard>({} as IDisputeReasonCard);
  cardDeselected$ = new BehaviorSubject<IDisputeReasonCard>({} as IDisputeReasonCard);
  constructor() {}
}
