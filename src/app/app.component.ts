import { Component } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { APIService } from '@shared/services/aws/api.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'brave-app';

  // inject app monitoring services and auth service
  constructor(private api: APIService, private auth: AuthService) {}
}
