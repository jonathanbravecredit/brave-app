import { BehaviorSubject } from 'rxjs';

export abstract class SpinningButtonService {
  abstract fetching$: BehaviorSubject<boolean>;
}
