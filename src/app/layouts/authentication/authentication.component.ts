import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {
  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    // await this.auth.reloadCredentials();
  }
}
