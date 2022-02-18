import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import * as CreditReportActions from '../../../store/credit-report/credit-report.actions'

@Injectable({
  providedIn: 'root',
})
export class Creditreportv2Service {
  constructor(private http: HttpClient, private auth: AuthService, private store: Store) {}

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

  async updateCreditReportState(report: IMergeReport) {
    const payload = {
      report: report,
      updatedOn: new Date().toISOString(),
    };
    this.store.dispatch(new CreditReportActions.Add(payload));
  }
}
