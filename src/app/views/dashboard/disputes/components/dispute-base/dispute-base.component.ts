import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { ConfirmationModalComponent } from '@shared/components/modals/confirmation-modal/confirmation-modal.component';
import { IDisputeReasonCard, IDisputeReason } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';
import {
  MODAL_CONFIRMATION_CONTENT,
  COMPONENT_CONTENT,
} from '@views/dashboard/disputes/components/dispute-base/content';
import { IDisputeProcessResult } from '@views/dashboard/disputes/components/dispute-base/interfaces';
import { TERMS_CONDITIONS } from '@views/dashboard/disputes/components/dispute-conditional-terms/content';
import { DisputeReasonPageService } from '@views/dashboard/disputes/components/dispute-reason-page/dispute-reason-page.service';
import {
  DISPUTE_REASONS_NOTMINE,
  DISPUTE_REASONS_INACCURATE,
  DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS,
} from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/constants';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

type viewState = 'select' | 'summary' | 'reason';
export type SelectionTypes = 'not-mine' | 'inaccurate';

@Component({
  selector: 'brave-dispute-base',
  templateUrl: './dispute-base.component.html',
})
export class DisputeBaseComponent implements OnInit, OnDestroy {
  @ViewChild(ConfirmationModalComponent) modal: ConfirmationModalComponent | undefined;

  @Input() disputeType: SelectionTypes | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Input() firstOptionDescription = 'This is not mine';
  @Input() secondOptionDescription = 'Account information is inaccurate';
  // using tradeline reasons as defaults
  @Input() firstOptionReasonPages = DISPUTE_REASONS_NOTMINE;
  @Input() secondOptionReasonPages = DISPUTE_REASONS_INACCURATE;
  @Input() processReasons = DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS;

  @Output() disputeProcessResult: EventEmitter<IDisputeProcessResult> = new EventEmitter();

  // component props
  @Input() viewState: viewState[] = ['select']; // can override
  showMaxError = false;
  maxSelections: number = 2;
  confirmed: boolean = false;
  customInput: string = '';
  customInputSelected = false;
  reasonCards: IDisputeReasonCard[] = [];
  selections: IDisputeReasonCard[] = [];
  // template content
  modalContent = MODAL_CONFIRMATION_CONTENT;
  termsContent = TERMS_CONDITIONS;
  content = COMPONENT_CONTENT;

  cardSelected$: Subscription | undefined;

  constructor(private reasonPageService: DisputeReasonPageService) {
    this.cardSelected$ = this.reasonPageService.cardSelected$
      .pipe(
        filter((c) => Object.keys(c).length > 0),
        tap((c: IDisputeReasonCard) => this.addSelection(c)),
      )
      .subscribe();
  }

  get currentView(): viewState {
    return this.viewState[this.viewState.length - 1];
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.cardSelected$) this.cardSelected$.unsubscribe();
  }

  addSelection(reason: IDisputeReasonCard): void {
    if (reason.selected) return; // already selected don't add again
    if (reason.allowInput) {
      // custom input reason only allows one selection and requires confirmation
      this.maxSelections = 1;
      this.customInputSelected = true;
      if (!this.confirmed) this.modal?.open();
    }

    if (this.selections.length >= this.maxSelections) {
      // cannot select more than two
      this.showMaxError = true;
      setTimeout(() => (this.showMaxError = false), 3000);
      return;
    } else {
      reason.selected = true; // flag it as selected
      this.selections = this.selections.length > 0 ? [this.selections[0], reason] : [reason];
    }
  }

  removeSelection(idx: number): void {
    const removed = this.selections.splice(idx, 1).pop();
    this.selections = [...this.selections];

    // if the one being removed is custom, reset to 2 max
    if (removed?.allowInput) {
      this.maxSelections = 2;
      this.customInputSelected = false;
    }

    // reset the static card selected status to false
    const origIdx = this.reasonCards.findIndex((v) => v.reason.id === removed?.reason.id);
    this.reasonCards[origIdx].selected = false;
    this.reasonPageService.cardDeselected$.next(this.reasonCards[origIdx]);
  }

  onRadioChanges(event: any): void {
    const value: SelectionTypes = event.target.value;
    this.disputeType = value;
    this.reasonCards = value === 'not-mine' ? this.firstOptionReasonPages : this.secondOptionReasonPages;
  }

  onTextChange(event: string, idx: number): void {
    this.customInput = event;
    this.selections[idx]['customInput'] = event;
  }

  onConfirmed(event: boolean): void {
    this.confirmed = event; // need to save this to state...may be doing it on process results
  }

  goToReasons(): void {
    this.viewState = [...this.viewState, 'reason'];
  }

  goToSummary(): void {
    this.viewState = [...this.viewState, 'summary'];
  }

  goBack(): void {
    const current = this.viewState.pop();
    if (current === 'reason') {
      // reset everything
      this.selections = [];
      this.customInput = '';
      this.customInputSelected = false;
      this.disputeType = undefined;
    }
  }

  parseIds(): [string, string] {
    return this.selections.filter((v) => v.reason.id).map((v) => v.reason.id) as [string, string];
  }

  parseReasons(ids: [string, string]): [IDisputeReason?, IDisputeReason?] {
    return ids.map((id) => {
      return this.processReasons.find((r) => r.id === id);
    }) as [IDisputeReason, IDisputeReason?];
  }

  sendDispute(): void {
    const reasonIds = this.parseIds();
    const reasons = this.parseReasons(reasonIds);
    this.disputeProcessResult.emit({
      isFinished: true,
      data: {
        hasCustomInput: this.customInputSelected,
        customInput: this.customInput,
        reasonsId: reasonIds,
        reasons: reasons,
      },
    });
  }

  getButtonConfig(): IFilledOnlyTextButtonConfig {
    let defaultConfig: IFilledOnlyTextButtonConfig = {
      buttonSize: 'base',
      backgroundColor: 'bg-indigo-800',
      activeColor: 'bg-indigo-900',
      color: 'text-white',
      full: false,
    };

    if (this.disputeType !== undefined) {
      return defaultConfig;
    } else {
      defaultConfig.backgroundColor = 'bg-black';
      defaultConfig.activeColor = 'bg-black';
      return defaultConfig;
    }
  }
}
