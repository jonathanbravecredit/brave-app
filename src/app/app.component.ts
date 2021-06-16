import { Component } from '@angular/core';

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

  constructor() {}

  // ngOnDestroy() {
  //   if (this.apiCreateListener$) this.apiCreateListener$.unsubscribe();
  //   if (this.apiUpdateListener$) this.apiUpdateListener$.unsubscribe();
  //   if (this.apiDeleteListener$) this.apiDeleteListener$.unsubscribe();
  // }
}
