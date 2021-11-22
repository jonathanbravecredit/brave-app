import { OnInit, AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

export type disputeViewState = 'select' | 'reason' | 'summary';
export type SelectionTypes = 'not-mine' | 'inaccurate';

@Component({
  selector: 'brave-dispute-base',
  templateUrl: './dispute-base.component.html',
})
export class DisputeBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ConfirmationModalComponent) modal: ConfirmationModalComponent | undefined;

  @Input() disputeType: SelectionTypes | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Input() firstOptionDescription = 'This is not mine';
  @Input() secondOptionDescription = 'Account information is inaccurate';
  // using tradeline reasons as defaults
  @Input() firstOptionReasonPages = DISPUTE_REASONS_NOTMINE;
  @Input() secondOptionReasonPages = DISPUTE_REASONS_INACCURATE;
  @Input() processReasons = DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS;
  @Input() defaultReasonCard: IDisputeReasonCard | undefined;
  @Output() disputeProcessResult: EventEmitter<IDisputeProcessResult> = new EventEmitter();

  // component props
  @Input() disputeViewState: disputeViewState = 'select'; //disputeViewState[] = ['select']; // can override
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
  pendingReasonCard: IDisputeReasonCard | undefined;
  confirmSub$: Subscription | undefined;
  paramsSub$: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reasonPageService: DisputeReasonPageService,
  ) {
    this.cardSelected$ = this.reasonPageService.cardSelected$
      .pipe(
        filter((c) => Object.keys(c).length > 0),
        tap((c: IDisputeReasonCard) => this.addSelection(c)),
      )
      .subscribe();
    this.paramsSub$ = this.route.queryParams.subscribe((params) => {
      this.disputeViewState = params.step;
      if (this.disputeViewState === 'reason' || this.disputeViewState === 'select') {
        // reset everything if going back
        this.selections = [];
        this.customInput = '';
        this.customInputSelected = false;
        this.disputeType = undefined;
      }
    });
  }

  get currentView(): disputeViewState {
    return this.disputeViewState;
    // return this.disputeViewState[this.disputeViewState.length - 1];
  }

  ngOnInit(): void {
    if (this.defaultReasonCard) this.addSelection(this.defaultReasonCard);
  }

  ngAfterViewInit(): void {
    this.confirmSub$ = this.modal?.confirmed$.subscribe((val) => {
      this.confirmed = val;
      val ? this.addSelection(this.pendingReasonCard) : (this.pendingReasonCard = undefined);
    });
  }

  ngOnDestroy(): void {
    if (this.cardSelected$) this.cardSelected$.unsubscribe();
    if (this.confirmSub$) this.confirmSub$.unsubscribe();
    if (this.paramsSub$) this.paramsSub$.unsubscribe();
  }

  addSelection(reason: IDisputeReasonCard | undefined): void {
    if (!reason) return;
    if (reason.selected) return; // already selected don't add again
    this.maxSelections = reason.allowMore ? 2 : 1;
    // handle custom input allowed
    if (reason.allowInput) {
      // custom input reason only allows one selection and requires confirmation
      this.customInputSelected = true;
      if (!this.confirmed) {
        this.pendingReasonCard = reason; // stage the card until the user confirms they want to proceed
        this.modal?.open();
        return;
      }
    } else {
      // custom input reason only allows one selection and requires confirmation
      this.customInputSelected = false;
    }

    if (this.selections.length >= this.maxSelections && !reason.allowInput) {
      // cannot select more than two...and not a custom input
      this.showMaxError = true;
      setTimeout(() => (this.showMaxError = false), 3000);
      return;
    } else if (this.selections.length >= this.maxSelections && reason.allowInput) {
      // will replace the existing one...as specified in the instructions
      this.removeAllSelections(this.selections);
      reason.selected = true;
      this.selections = [reason];
    } else {
      reason.selected = true; // flag it as selected
      this.selections = this.selections.length > 0 ? [this.selections[0], reason] : [reason];
    }
  }

  removeAllSelections(selections: IDisputeReasonCard[]): void {
    // first deselect all of them from carousel
    selections.forEach((card) => {
      this.reasonPageService.cardDeselected$.next(card);
    });
    // then set selections to an empty array
    this.selections = [];
  }

  removeSelection(idx: number): void {
    const removed = this.selections.splice(idx, 1).pop();
    this.selections = [...this.selections];

    // if the one being removed is custom, reset to 2 max and they'll need to reconfirm again if they add it back
    if (removed?.allowInput) {
      this.maxSelections = 2;
      this.customInputSelected = false;
      this.confirmed = false;
    }

    // reset the static card selected status to false
    const origIdx = this.reasonCards.findIndex((v) => v.reason.id === removed?.reason.id);
    this.reasonCards[origIdx].selected = false;
    this.reasonPageService.cardDeselected$.next(this.reasonCards[origIdx]);
  }

  onRadioChanges(event: any): void {
    const value: SelectionTypes = event.target.value;
    this.disputeType = value;
    this.maxSelections = value === 'not-mine' ? 1 : 2;
    this.reasonCards = value === 'not-mine' ? this.firstOptionReasonPages : this.secondOptionReasonPages;
  }

  onTextChange(event: string, idx: number): void {
    this.customInput = event;
    this.selections[idx]['customInput'] = event;
  }

  goToReasons(): void {
    const url = this.router.createUrlTree([], { relativeTo: this.route, queryParams: { step: 'reason' } }).toString();
    this.router.navigateByUrl(url);
  }

  goToSummary(): void {
    const url = this.router.createUrlTree([], { relativeTo: this.route, queryParams: { step: 'summary' } }).toString();
    this.router.navigateByUrl(url);
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
