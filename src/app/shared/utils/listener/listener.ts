import { EventKeys } from '@shared/services/broadcast/broadcast.model';
import { BroadcastService } from '@shared/services/broadcast/broadcast.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

export class Listener {
  private eventSubscription: Subscription;
  constructor(broadcastService: BroadcastService, eventKey: EventKeys, private listenerName: string) {
    _.bindAll(this, 'reactToEvent');
    this.eventSubscription = broadcastService.on(eventKey).subscribe(this.reactToEvent);
  }

  private reactToEvent(event: string) {
    console.log(`Listener: ${this.listenerName} received event : ${event}`);
  }
  public unregister() {
    this.eventSubscription.unsubscribe();
  }
}
