import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Auth, { CognitoUser } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { environment } from '@environments/environment';
import { IProxyRequest } from '@shared/utils/brave/interfaces';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  private cognitoUser: CognitoUser | undefined;
  private proxyState: Subject<CognitoUser | any> = new Subject<CognitoUser | any>();
  proxyState$: Observable<CognitoUser | any> = this.proxyState.asObservable();

  constructor(private http: HttpClient) {
    Hub.listen('auth', (data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this.proxyState.next(payload.data);
        this.cognitoUser = payload.data;
      }
    });
    this.refreshProxyState();
  }

  get headers() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    return headers;
  }

  get token() {
    return this.cognitoUser?.getSignInUserSession()?.getIdToken()?.getJwtToken() || '';
  }

  async postProxyRequest<T>(request: IProxyRequest<T>): Promise<any> {
    const url = `${environment.api}/proxy`;
    const body = JSON.stringify(request);
    const headers = this.headers;
    return await this.http.post(url, body, { headers }).toPromise();
  }

  async refreshProxyState(user?: CognitoUser): Promise<void> {
    if (user) {
      this.proxyState.next(user);
      return;
    }
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.proxyState.next(user);
    } catch (err) {
      const unconfirmed = await Auth.currentCredentials();
      this.proxyState.next(null);
    }
  }
}
