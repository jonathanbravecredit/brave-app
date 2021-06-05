import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { Hub, ICredentials } from '@aws-amplify/core';
import {
  APIService,
  UpdateAppDataInput,
} from '@shared/services/aws/api.service';
import * as AppDataActions from '@store/app-data/app-data.actions';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'brave-signin-redirect',
  templateUrl: './signin-redirect.component.html',
})
export class SigninRedirectComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private api: APIService,
    private store: Store,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.auth.refreshAuthState();
      const user: ICredentials | null = await this.auth.getAuthCredentials();
      if (user) {
        const id = user.identityId;
        const res = await this.api.GetAppData(id);
        console.log('id', id);
        console.log('res', res);

        if (!res) {
          await this.auth.seedAppData({ identityId: id } as ICredentials);
          this.router.navigate(['/onboarding/name']);
          return;
        } else {
          const input = { ...res } as UpdateAppDataInput;
          console.log('input', input);
          // await this.store.dispatch(new AppDataActions.Edit(res));
          if (res.user.onboarding?.lastComplete === 3) {
            this.router.navigate(['/dashboard/']);
          } else {
            switch (res.user.onboarding?.lastComplete) {
              case -1:
                this.router.navigate(['/onboarding/name']);
                break;
              case 0:
                this.router.navigate(['/onboarding/address']);
                break;
              case 1:
                this.router.navigate(['/onboarding/identity']);
                break;
              case 2:
                this.router.navigate(['/onboarding/verify']);
                break;
              default:
                this.router.navigate(['/dashboard/']);
                break;
            }
          }
        }
      }
    } catch (err) {
      console.log('redirect error', err);
    }
  }
}

const navs: Record<string, any> = {};
