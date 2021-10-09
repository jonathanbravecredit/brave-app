import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BaseModalSmallComponent,
  IBaseModalSmallConfig,
} from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticErrorEvents } from '@shared/services/analytics/analytics/constants';
import { P1, P2, P3 } from '@views/authentication/signup-error-validation/constants';

@Component({
  selector: 'brave-suspended-default',
  templateUrl: './suspended-default.view.html',
})
export class SuspendedDefaultView implements OnInit {
  @ViewChild(BaseModalSmallComponent) modal: BaseModalSmallComponent | undefined;
  showModal: boolean = false;
  config: IBaseModalSmallConfig;
  p1 = P1;
  p2 = P2;
  p3 = P3;
  link = 'https://www.transunion.com';
  constructor(private analytics: AnalyticsService) {
    this.config = {
      title: '',
      enableButtonOne: false,
      enableButtonTwo: false,
    };
  }

  ngOnInit(): void {
    this.initiateModal(this.showModal);
    this.analytics.fireErrorEvent(AnalyticErrorEvents.Suspension30DayLockout);
  }

  initiateModal(showModal: boolean): void {
    if (this.modal) {
      this.modal.showModal = showModal;
    }
  }

  toggleShowModal(): void {
    if (this.modal) {
      this.modal.showModal = !this.modal.showModal;
    }
  }
}
