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
    console.log('USERCHECK', user);
    return !!user;
  }

  async sessionLogic() {
    const braveSessionData: ISessionData = sessionStorage.get('braveSessionId');
    if (!braveSessionData) {
      const lastSession = await this.getLastSession();
      if (lastSession) {
        let expireCompare = moment(new Date()).isAfter(lastSession.sessionExpirationDate);
        if (expireCompare) {
          this.settingHelper()
        } else {
          let data: ISessionData = {
            sessionId: lastSession.sessionId,
            expirationDate: lastSession.sessionExpirationDate,
          };
          sessionStorage.setItem('bravesessionid', JSON.stringify(data));
          this.sessionData$.next(data);
        }
      } else {
        this.settingHelper()
      }
    } else {
      let expireCompare = moment(new Date()).isAfter(braveSessionData.expirationDate);
      if (expireCompare) {
        this.settingHelper()
      } else {
        return
      }
      return;
    }
  }

  async settingHelper() {
    sessionStorage.setItem('bravesessionid', JSON.stringify(this.sessionData));
    this.sessionData$.next(this.sessionData);
    await this.createSessionData(this.sessionData);
  }


  async getLastSession(): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens()
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    return this.http
      .get<ISessionDB>(this.dbUrl, { headers })
      .toPromise(); //TODO
  }

  async getSessionData(sessionId: string): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens()
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const params = new HttpParams();
    params.append('sessionId', sessionId);

    return this.http
      .get<ISessionDB>(this.dbUrl, { headers, params })
      .toPromise(); //TODO
  }

  async createSessionData(data: ISessionData): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens()
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    return this.http
      .post<ISessionDB>(this.dbUrl, data, { headers })
      .toPromise(); //TODO
  }

  async updateSessionData(data: ISessionData): Promise<ISessionDB> {
    let token = await this.auth.getIdTokenJwtTokens()
    let headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    return this.http
      .patch<ISessionDB>(this.dbUrl, data, { headers })
      .toPromise(); //TODO
  }
}
