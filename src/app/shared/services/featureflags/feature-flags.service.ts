import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  disputes$: Observable<boolean> = of(true);
  constructor() {}
}
