import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';
import { ICreateAnalytic } from '@shared/services/analytics/brave/interfaces/tracking.interfaces';
import { AuthService } from '@shared/services/auth/auth.service';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BraveAnalyticsService {
  disable = !environment.production;
  constructor(private http: HttpClient, private auth: AuthService) {}

  async fireClickEvent(event: AnalyticClickEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    const url = `${environment.analytics}/tracking`;
    const sub = await this.auth.getUserSub();
    const token = await this.auth.getIdTokenJwtTokens();
    const session = sessionStorage.getItem('sessionId') || '';
    const payload: ICreateAnalytic = {
      id: v4(),
      event: event,
      sub: sub,
      session: session,
      source: 'app',
      value: 1,
    };
    const body = JSON.stringify(payload);
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    return await this.http
      .post<any>(url, body, { headers })
      .toPromise();
  }
}
