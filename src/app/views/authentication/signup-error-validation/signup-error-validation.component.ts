import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BaseModalSmallComponent,
  IBaseModalSmallConfig,
} from '@shared/components/modals/base-modal-small/base-modal-small.component';
import { P1, P2, P3 } from '@views/authentication/signup-error-validation/constants';

@Component({
  selector: 'brave-signup-error-validation',
  templateUrl: './signup-error-validation.component.html',
})
export class SignupErrorValidationComponent implements OnInit {
  @ViewChild(BaseModalSmallComponent) modal: BaseModalSmallComponent | undefined;
  showModal: boolean = false;
  config: IBaseModalSmallConfig;
  p1 = P1;
  p2 = P2;
  p3 = P3;
  link = 'https://www.transunion.com';
  constructor() {
    this.config = {
      title: '',
      enableButtonOne: false,
      enableButtonTwo: false,
    };
  }

  ngOnInit(): void {
    this.initiateModal(this.showModal);
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
