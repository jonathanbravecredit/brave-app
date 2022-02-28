import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthService } from '@shared/services/auth/auth.service';
import { environment } from '@environments/environment';
import * as ProgressTrackerActions from '../../../store/progress-tracker/progress-tracker.actions';
import { IGoalInfo } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';
import { Initiative, InitiativePatchBody } from '@shared/interfaces/progress-tracker.interface';

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService {
  constructor(
    private http: HttpClient,
    private store: Store,
    private auth: AuthService,
  ) {}

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
      return res;
    } catch (error) {
      return null;
    }
    // return await new Promise((res) => res(MOCKPROGRESSTRACKERDATA));
  }

  async updateProgressTrackerData(patchBody: InitiativePatchBody): Promise<Initiative | null> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    try {
      let res = await this.http.put<Initiative>(environment.api + '/initiatives', patchBody, { headers }).toPromise(); //!change test url
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
