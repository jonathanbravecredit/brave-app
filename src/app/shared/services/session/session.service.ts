import { Injectable } from '@angular/core';
const dayjs = require('dayjs');
import { Hub } from '@aws-amplify/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/auth/auth.service';
import { Auth } from 'aws-amplify';

export interface ISessionData {
  sessionId: string;
  expirationDate: string;
}

export interface ISessionDB {
  userId: string;
  sessionId: string;
  sessionDate: string;
  sessionExpirationDate: string;
  pageViews: number;
  clickEvents: number;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessionData$: BehaviorSubject<ISessionDB> = new BehaviorSubject({} as ISessionDB);
  sessionData: ISessionDB | undefined;
  url: string = environment.api;

  constructor(private http: HttpClient, private auth: AuthService) {
    Hub.listen('auth', async (data) => {
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          await this.sessionLogic();
          break;
        default:
          break;
      }
    });

    (async () => {
      try {
        const signedIn = await this.checkIfUserSignedIn();
        if (signedIn) {
          this.sessionLogic();
        }
      } catch (err) {
        console.log('Not signed in');
      }
    })();
  }

  async checkIfUserSignedIn(): Promise<boolean> {
    const user = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    return !!user;
  }

  async sessionLogic(): Promise<void> {
    try {
      const lastSession = (await this.getLastestSession())[0];
      if (lastSession) {
        const expired = dayjs(new Date()).isAfter(lastSession.sessionExpirationDate);
        expired ? this.settingHelper() : this.sessionData$.next(lastSession);
      } else {
        this.settingHelper();
      }
    } catch (err) {
      this.settingHelper();
    }
  }

  async settingHelper(): Promise<void> {
    const session = await this.createSessionData();
    this.sessionData$.next(session);
  }

  async getLastestSession(): Promise<ISessionDB[]> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    let params = new HttpParams();
    params = params.append('limit', '1');
    params = params.append('sort', 'desc');

    return this.http.get<ISessionDB[]>(`${this.url}/sessions`, { headers, params }).toPromise(); //TODO
  }

  async getSessionData(sessionId: string): Promise<ISessionDB> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    return this.http.get<ISessionDB>(`${this.url}/sessions/${sessionId}`, { headers }).toPromise(); //TODO
  }

  async createSessionData(): Promise<ISessionDB> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const body = {};
    return this.http.post<ISessionDB>(`${this.url}/sessions`, body, { headers }).toPromise(); //TODO
  }

  async updateSessionData(data: ISessionData, event: string): Promise<ISessionDB> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const { sessionId } = data;
    const body = {
      sessionId,
      event,
    };
    return this.http.put<ISessionDB>(`${this.url}/sessions/${sessionId}`, body, { headers }).toPromise(); //TODO
  }
}
