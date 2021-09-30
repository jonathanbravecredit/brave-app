import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BaseModalSmallComponent,
  IBaseModalSmallConfig,
} from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { GoogleErrorEvents as gtErrs } from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
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
  constructor(private google: GoogleService) {
    this.config = {
      title: '',
      enableButtonOne: false,
      enableButtonTwo: false,
    };
  }

  ngOnInit(): void {
    this.initiateModal(this.showModal);
    this.google.fireErrorEvent(gtErrs.Suspension30DayLockout);
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
