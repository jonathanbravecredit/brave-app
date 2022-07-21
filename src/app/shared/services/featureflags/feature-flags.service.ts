import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FeatureFlagsService {
  disputes$: Observable<boolean> = of(false);
  dataBreaches$: Observable<boolean> = of(false);
  getTrendingData$: Observable<boolean> = of(true);
  referrals$: Observable<boolean> = of(true);
  referralsShow$: Observable<boolean> = of(true);
  constructor() {}
}
