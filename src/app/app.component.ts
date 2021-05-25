import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'brave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'brave-app';

  // user: CognitoUserInterface | undefined;
  // authState: AuthState = {} as AuthState;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
