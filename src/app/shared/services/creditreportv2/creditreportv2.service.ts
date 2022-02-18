import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { AuthService } from '@shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class Creditreportv2Service {
  constructor(private http: HttpClient, private auth: AuthService) {}

  async getCurrentCreditReport(): Promise<IMergeReport> {
    const url = `${environment.creditreports}/creditreport`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    const report = await this.http.get<IMergeReport>(url, { headers }).toPromise();
    console.log('get report', JSON.stringify(report));
    return report;
  }
}
