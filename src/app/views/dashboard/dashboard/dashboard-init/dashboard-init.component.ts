import { Component, Input } from '@angular/core';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { AppDataStateModel } from '@store/app-data';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'brave-dashboard-init',
  templateUrl: './dashboard-init.component.html',
})
export class DashboardInitComponent {
  @Input() securityFreeze: boolean = false;
  initiated: boolean = false;
  isEnrolled: boolean = false;
  
  constructor(private dashboardService: DashboardService) {
    this.dashboardService.state$
      .pipe(filter((state) => Object.keys(state).length > 0))
      .subscribe((state: AppDataStateModel) => {
        this.isEnrolled = !!state.agencies?.transunion?.enrolled;
        this.initiated = true;
      });
  }
}
