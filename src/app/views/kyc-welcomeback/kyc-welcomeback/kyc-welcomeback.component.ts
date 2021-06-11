import { Component, OnInit } from '@angular/core';
import { ICredentials } from '@aws-amplify/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-kyc-welcomeback',
  templateUrl: './kyc-welcomeback.component.html',
})
export class KycWelcomebackComponent implements OnInit {
  constructor(private auth: AuthService, private sync: SyncService) {}

  async ngOnInit(): Promise<void> {
    const creds: ICredentials = await this.auth.getCurrentUserCredentials();
    await this.sync.hallmonitor(creds);
  }

  goBack(): void {
    // need to add state to pick up where left off
  }

  goToNext(): void {
    // need to add state to pick up where left off
  }
}
