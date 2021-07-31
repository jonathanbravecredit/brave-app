import { Component, OnInit } from '@angular/core';
import { ICredentials } from '@aws-amplify/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-kyc-welcomeback',
  templateUrl: './kyc-welcomeback.component.html',
})
export class KycWelcomebackComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {}

  goBack(): void {
    // need to add state to pick up where left off
  }

  goToNext(): void {
    // need to add state to pick up where left off
  }
}
