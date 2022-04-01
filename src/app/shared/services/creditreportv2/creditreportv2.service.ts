import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ICreditReport } from '@shared/models/CreditReports.model';
import { Store } from '@ngxs/store';
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

  updateCreditReportState(creditReport: ICreditReport) {
    const { report, modifiedOn } = creditReport;
    const payload = {
      report,
      updatedOn: new Date().toISOString(),
      modifiedOn,
    };
    this.store.dispatch(new CreditReportActions.Add(payload));
  }

  async updateCreditReportStateAsync(creditReport: ICreditReport) {
    const { report, modifiedOn } = creditReport;
    const payload = {
      report,
      updatedOn: new Date().toISOString(),
      modifiedOn,
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
