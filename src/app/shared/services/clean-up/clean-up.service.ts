import { Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data/app-data.actions';
import * as CreditReportActions from '@store/credit-report/credit-report.actions';
import * as ProgressTrackerActions from '@store/progress-tracker/progress-tracker.actions';

@Injectable({
  providedIn: 'root',
})
export class CleanUpService implements OnDestroy {
  listener: any;
  renderer: Renderer2 | undefined;

  constructor(private store: Store, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  clearAllState(): void {
    this.store.dispatch(new AppDataActions.Delete());
    this.store.dispatch(new CreditReportActions.Delete());
    this.store.dispatch(new ProgressTrackerActions.Delete());
  }

  clearAllApplicationStorage(): void {
    window.localStorage.clear()
    window.sessionStorage.clear()
    this.deleteAllCookies()
  }

  deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

  runOnAppClose(callback: Function): void {
    if (this.renderer) {
      this.listener = this.renderer.listen(window, 'beforeunload', (event: BeforeUnloadEvent) => {
        callback();

        event.returnValue = false;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener(); // listener returns a function to invoke which 'unlistens'
      this.listener = null;
    }
  }
}
