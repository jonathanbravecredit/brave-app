import { Component } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brave-app';

  // apiCreateListener$: ZenObservable.Subscription;
  // apiUpdateListener$: ZenObservable.Subscription;
  // apiDeleteListener$: ZenObservable.Subscription;

  // inject app monitoring services
  constructor(private auth: AuthService, private sync: SyncService) {}

  // ngOnDestroy() {
  //   if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
  //   if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
  //   if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  // }
}
