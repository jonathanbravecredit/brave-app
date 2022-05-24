import { Injectable } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { BroadcastService } from '@shared/services/broadcast/broadcast.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EventKeys } from '@shared/services/broadcast/broadcast.model';
import { ForbearanceViewModel } from '@views/dashboard/forbearance/forbearance.model';
import _ from 'lodash';

@Injectable()
export class ForbearanceService {
  model: ForbearanceViewModel = { tradelines: [] } as ForbearanceViewModel;
  model$: BehaviorSubject<ForbearanceViewModel> = new BehaviorSubject<ForbearanceViewModel>({} as ForbearanceViewModel);

  creditReportServiceSub$: Subscription = new Subscription();

  constructor(private broadcastService: BroadcastService, private creditReportService: CreditreportService) {
    _.bindAll(this, 'setModel');
    this.creditReportServiceSub$ = this.creditReportService.tuReport$.subscribe(this.setModel);
  }

  ngOnDestroy(): void {
    this.creditReportServiceSub$.unsubscribe();
  }

  navigate(route: string): void {
    this.broadcastService.broadcast(EventKeys.NAVIGATION, route);
  }

  setModel(): void {
    const tradelines = this.creditReportService.getTradeLinePartitions();
    this.model = { ...this.model, tradelines };
    this.model$.next(this.model);
  }

  onViewDetail(tradeline: ITradeLinePartition): void {
    this.creditReportService.setTradeline(tradeline);
    this.navigate(routes.root.dashboard.report.tradeline.full);
  }
}
