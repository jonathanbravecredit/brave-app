import { Component, OnDestroy } from '@angular/core';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ForbearanceViewModel } from '@views/dashboard/forbearance/forbearance.model';
import { ForbearanceService } from '@views/dashboard/forbearance/forbearance.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-forbearance-pure',
  templateUrl: './forbearance-pure.view.html',
})
export class ForbearancePureView implements OnDestroy {
  public groups = CreditReportGroups;
  public model: ForbearanceViewModel = { tradelines: [] } as ForbearanceViewModel;
  public serviceSub$: Subscription = new Subscription();

  constructor(private forbearanceService: ForbearanceService) {
    this.serviceSub$ = this.forbearanceService.model$.subscribe((model) => {
      this.model = model;
    });
  }

  ngOnDestroy(): void {
    this.serviceSub$.unsubscribe();
  }
}
