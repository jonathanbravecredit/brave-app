import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { environment } from '@environments/environment';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';
import { Initiative, InitiativePatchBody } from '@shared/interfaces/progress-tracker.interface';
import * as ProgressTrackerActions from '@store/progress-tracker/progress-tracker.actions';
import { Select, Store } from '@ngxs/store';
import { ProgressTrackerStateModel } from '@store/progress-tracker';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService implements OnDestroy {
  @Select(ProgressTrackerStateModel) initiative$!: Observable<ProgressTrackerStateModel>;
  private initiativeSub$: Subscription | undefined;
  initiative: Initiative | null = null;

  constructor(private http: HttpClient, private auth: AuthService, private store: Store) {
    this.subscribeToProgressTrackerData()
  }

  subscribeToProgressTrackerData(): void {
    this.initiativeSub$ = this.initiative$
      .pipe(
        filter((res) => {
          console.log('HERE', res)
          return res !== undefined;
        }),
      )
      .subscribe((res) => {
        console.log('HERE 2', res)
        this.initiative = res.data;
      });
  }

  ngOnDestroy(): void {
    this.initiativeSub$?.unsubscribe();
  }

  updateProgressTrackerState(progressTrackerData: Initiative) {
    this.store.dispatch(new ProgressTrackerActions.Add({ data: progressTrackerData }));
  }

  async getProgressTrackerData(): Promise<Initiative | null> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    try {
      let res = await this.http.get<Initiative>(environment.api + '/initiatives', { headers }).toPromise();
      this.updateProgressTrackerState(res);
      return res;
    } catch (error) {
      return null;
    }
  }

  async updateProgressTrackerData(patchBody: InitiativePatchBody): Promise<Initiative | null> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    try {
      let res = await this.http.put<Initiative>(environment.api + '/initiatives', patchBody, { headers }).toPromise(); //!change test url
      await this.getProgressTrackerData();
      return res;
    } catch (err) {
      return null;
    }
  }

  async postUserGoal(goalInfo: IGoalInfo) {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const patchBody = {
      programId: goalInfo.programId,
      reason: goalInfo.reason,
    };

    return await this.http.post<Initiative>(environment.api + '/initiatives', patchBody, { headers }).toPromise();
  }
}
