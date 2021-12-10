import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  disputes$: Observable<boolean> = of(true);
  getTrendingData$: Observable<boolean> = of(true);
  referrals$: Observable<boolean> = of(false);
  constructor() {}
}
