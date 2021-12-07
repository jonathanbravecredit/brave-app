import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/auth/auth.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ReferralMetricsResolver implements Resolve<any> {
  constructor(private http: HttpClient, private auth: AuthService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const url = `${environment.marketing}/campaign/earnings`;
    const token = await this.auth.getIdTokenJwtTokens();
    console.log('token ===>', token);
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });
    const now = new Date();
    const month = moment(now).format('MM');
    const year = moment(now).format('YYYY');
    let params = new HttpParams();
    params = params.append('month', month);
    params = params.append('year', year);
    return this.http
      .get<any>(url, { headers, params })
      .toPromise();
  }
}
