import { ICredentials } from '@aws-amplify/core';
import { GuestService } from '@shared/services/auth/guest.service';

export class GuestBase {
  private _guestCredentials!: ICredentials;
  constructor(private guest: GuestService) {
    guest.guestState$.subscribe((guest) => {
      this._guestCredentials = guest;
    });
    guest.refreshGuestState();
  }

  get guestCredentials(): ICredentials {
    return this._guestCredentials;
  }
}
