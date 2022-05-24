import { Component } from '@angular/core';
import { CreditReportGroups } from '@shared/constants/credit-report';
import { ForbearanceViewModel } from '@views/dashboard/forbearance/forbearance.model';
import { ForbearanceService } from '@views/dashboard/forbearance/forbearance.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-forbearance-pure',
  templateUrl: './forbearance-pure.view.html',
})
export class ForbearancePureView {
  public groups = CreditReportGroups;
  public model: ForbearanceViewModel = {} as ForbearanceViewModel;
  private serviceSub$: Subscription;

  constructor(private forbearanceService: ForbearanceService) {
    this.serviceSub$ = this.forbearanceService.model$.subscribe((model) => {
      this.model = model;
    });
  }

  ngOnDestroy(): void {
    this.serviceSub$.unsubscribe();
  }
}
