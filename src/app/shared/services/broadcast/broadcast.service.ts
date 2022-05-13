import { Injectable } from '@angular/core';
import { EventKeys, IBroadcastEvent } from '@shared/services/broadcast/broadcast.model';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BroadcastService {
  private _eventBus = new Subject<IBroadcastEvent>();
  constructor() {}

  on(key: EventKeys): Observable<string> {
    return this._eventBus.asObservable().pipe(
      filter((e) => e.key === key || e.key === EventKeys.ALL),
      map((e) => e.data),
    );
  }

  broadcast(key: EventKeys, data: string) {
    this._eventBus.next({ key, data });
  }
}
