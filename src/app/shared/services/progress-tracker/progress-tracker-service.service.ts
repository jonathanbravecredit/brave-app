import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthService } from '@shared/services/auth/auth.service';
import { StateService } from '@shared/services/state/state.service';
import { Initiative } from '@views/dashboard/snapshots/progress-tracker/MOCKDATA';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService {
  constructor(private http: HttpClient, private store: Store, private statesvc: StateService, private auth: AuthService) {

  }

  // async getProgressTrackerData(): Promise<Initiative> {
  //   const token = await this.auth.getIdTokenJwtTokens();
  //   const headers = new HttpHeaders({
  //     Authorization: `${token}`,
  //   });

  //   return this.http.get<Initiative>(environment. + '/', { headers }).toPromise();
  // }

  // async postProgressTrackerData(): Promise<Initiative> {
  //   const token = await this.auth.getIdTokenJwtTokens();
  //   const headers = new HttpHeaders({
  //     Authorization: `${token}`,
  //   });

  //   return this.http.get<Initiative>(environment. + '/', { headers }).toPromise();
  // }

  // async putProgressTrackerData(): Promise<Initiative> {
  //   const token = await this.auth.getIdTokenJwtTokens();
  //   const headers = new HttpHeaders({
  //     Authorization: `${token}`,
  //   });

  //   return this.http.get<Initiative>(environment. + '/', { headers }).toPromise();
  // }
}
