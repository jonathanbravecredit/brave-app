import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ICreditReport } from '@shared/models/CreditReports.model';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import * as CreditReportActions from '../../../store/credit-report/credit-report.actions';

@Injectable({
  providedIn: 'root',
})
export class Creditreportv2Service {
  constructor(private http: HttpClient, private auth: AuthService, private store: Store) {}

  async getCurrentCreditReport(): Promise<ICreditReport> {
    const url = `${environment.api}/creditreport`;
    const idToken = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${idToken}`,
    });
    const report = await this.http.get<ICreditReport>(url, { headers }).toPromise();
    return report;
  }

  updateCreditReportState(report: IMergeReport) {
    const payload = {
      report: report,
      updatedOn: new Date().toISOString(),
    };
    this.store.dispatch(new CreditReportActions.Add(payload));
  }

  async updateCreditReportStateAsync(report: IMergeReport) {
    const payload = {
      report: report,
      updatedOn: new Date().toISOString(),
    };
    await new Promise((resolve, reject) => {
      this.store
        .dispatch(new CreditReportActions.Add(payload))
        .toPromise()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
