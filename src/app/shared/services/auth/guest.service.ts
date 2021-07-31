import { Injectable } from '@angular/core';
import { ICredentials } from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private guestState: Subject<ICredentials | any> = new Subject<ICredentials | any>();
  guestState$: Observable<ICredentials | any> = this.guestState.asObservable();

  constructor() {
    this.initGuestState();
  }

  async initGuestState(): Promise<void> {
    await this.refreshGuestState();
  }

  async refreshGuestState(): Promise<void> {
    try {
      const guest = await Auth.currentCredentials();
      this.guestState.next(guest);
    } catch (err) {
      this.guestState.next(null);
    }
  }
}
