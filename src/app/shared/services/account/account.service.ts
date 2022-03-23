import { Injectable } from '@angular/core';
import { IDisputePersonalItem, IDisputePublicItem, IDisputeTradelineItem } from '@shared/interfaces/dispute.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountType: '' | '' | '' | undefined;
  tradeline: IDisputeTradelineItem | undefined;
  publicItem: IDisputePublicItem | undefined;
  personalItem: IDisputePersonalItem | undefined;

  constructor() {}
}
