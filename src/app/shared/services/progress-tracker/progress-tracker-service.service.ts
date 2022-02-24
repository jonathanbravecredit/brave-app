import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthService } from '@shared/services/auth/auth.service';
import { StateService } from '@shared/services/state/state.service';
import { Initiative, InitiativePatchBody, MOCKPROGRESSTRACKERDATA } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';
import { environment } from '@environments/environment';
import * as ProgressTrackerActions from '../../../store/progress-tracker/progress-tracker.actions';

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService {
  constructor(
    private http: HttpClient,
    private store: Store,
    private statesvc: StateService,
    private auth: AuthService,
  ) {}

  async getProgressTrackerData(): Promise<Initiative> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    //let res = this.http.get<Initiative>(environment. + '/', { headers }).toPromise();
    return await new Promise((res) => res(MOCKPROGRESSTRACKERDATA));
  }

  // async postProgressTrackerData(reason: string): Promise<Initiative> {
  //   const token = await this.auth.getIdTokenJwtTokens();
  //   const headers = new HttpHeaders({
  //     Authorization: `${token}`,
  //   });
  //   const body = {reason}

  //   return this.http.post<Initiative>(environment. + '/', body, { headers }).toPromise();
  // }

  // async patchProgressTrackerData(patchBody: InitiativePatchBody): Promise<Initiative> {
  //   const token = await this.auth.getIdTokenJwtTokens();
  //   const headers = new HttpHeaders({
  //     Authorization: `${token}`,
  //   });

  //   return this.http.patch<Initiative>('test url' , patchBody, { headers }).toPromise(); //!change test url
  // }

  updateProgressTrackerState(progressTrackerData: Initiative) {
    this.store.dispatch(new ProgressTrackerActions.Add({ data: progressTrackerData }));
  }
}
