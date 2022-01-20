import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as uuid from 'uuid';
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
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessionData$: BehaviorSubject<ISessionData> = new BehaviorSubject({} as ISessionData);
  dbUrl: string = environment.session + '/session';
  sessionData: ISessionData = {
    sessionId: uuid.v4(),
    expirationDate: moment(new Date()).add(1, 'day').toISOString(),
  };

  constructor(private http: HttpClient, private auth: AuthService) {
    Hub.listen('auth', async (data) => {
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          this.sessionLogic();
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

  async sessionLogic() {
    const lastSession = await this.getLastestSession();
    if (lastSession) {
      let expireCompare = moment(new Date()).isAfter(lastSession.sessionExpirationDate);
      if (expireCompare) {
        this.settingHelper();
      } else {
        let data: ISessionData = {
          sessionId: lastSession.sessionId,
          expirationDate: lastSession.sessionExpirationDate,
        };
        this.sessionData$.next(data);
      }
    } else {
      this.settingHelper();
    }
  }

  async settingHelper() {
    this.sessionData$.next(this.sessionData);
    await this.createSessionData(this.sessionData);
  }

  async getLastestSession(): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens();
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    let params = new HttpParams();
    params = params.append('limit', '1');
    params = params.append('sort', 'desc');

    return this.http
      .get<ISessionDB>(this.dbUrl, { headers, params })
      .toPromise(); //TODO
  }

  async getSessionData(sessionId: string): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens();
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    return this.http
      .get<ISessionDB>(`${this.dbUrl}/${sessionId}`, { headers })
      .toPromise(); //TODO
  }

  async createSessionData(data: ISessionData): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens();
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    let body = {
      userId: await this.auth.getUserSub(),
      sessionId: data.sessionId,
      sessionDate: moment(new Date()),
      sessionExpirationDate: data.expirationDate,
      pageViews: 1,
    };
    return this.http
      .post<ISessionDB>(this.dbUrl, body, { headers })
      .toPromise(); //TODO
  }

  async updateSessionData(data: ISessionData, event: string): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens();
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    let body = {
      userId: await this.auth.getUserSub(),
      sessionId: data.sessionId,
      sessionExpirationDate: data.expirationDate,
      event,
    };

    return this.http
      .patch<ISessionDB>(this.dbUrl, body, { headers })
      .toPromise(); //TODO
  }
}
