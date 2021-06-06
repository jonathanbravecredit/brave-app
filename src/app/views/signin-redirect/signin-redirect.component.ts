import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { ICredentials } from '@aws-amplify/core';

@Component({
  selector: 'brave-signin-redirect',
  templateUrl: './signin-redirect.component.html',
})
export class SigninRedirectComponent implements OnInit {
  constructor(private sync: SyncService, private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    try {
      const creds: ICredentials = await this.auth.getCredentials();
      await this.sync.hallMonitor(creds);
    } catch (err) {
      console.log('hall monitor error', err);
    }
  }
}

const navs: Record<string, any> = {};
