import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { BasePaginationComponent } from '@shared/components/paginations/base-pagination/base-pagination.component';
import { TBasePaginationNavigationDirection } from '@shared/components/paginations/base-pagination/interfaces';
import {
  IDisputeReasonCardPage,
  IDisputeSelectedObj,
  IDisputeProcessResult,
  IDisputeReasonCardPageItem,
  IDisputeReason,
} from '@views/dashboard/disputes/components/disputes-tradeline/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS,
  DEFAULT_TRADELINE_REASONS,
  DISPUTE_REASONS_INACCURATE,
  DISPUTE_REASONS_NOTMINE,
} from './constants';
import { TRADELINE_DISPUTES_NUMBER_OF_MAXIMUM_SELECTED_REASONS as maxSelectedItemAmount } from './settings';

type viewState = 'select' | 'summary' | 'reason';

@Component({
  selector: 'brave-disputes-tradeline',
  templateUrl: './disputes-tradeline.component.html',
})
export class DisputesTradelineComponent implements OnInit {
  @ViewChild(BasePaginationComponent) basePagination: BasePaginationComponent | undefined;
  @Input() disputeType: string | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Input() firstOptionDescription = 'This is not mine';
  @Input() secondOptionDescription = 'Account information is inaccurate';
  @Input() processReasons = DEFAULT_TRADELINE_DISPUTE_PROCESS_REASONS;
  @Output() disputeProcessResult: EventEmitter<IDisputeProcessResult> = new EventEmitter();

  viewState: viewState[] = ['select'];
  timeout: any;
  reasonOptionPages: IDisputeReasonCardPage[] = [];
  selectedIndexes: IDisputeSelectedObj[] = [];
  isCustomInputSelected = false;
  showCustomInputError = false;
  showMaxError = false;
  customReason: string = '';
  notMineReasons = DISPUTE_REASONS_NOTMINE;
  inaccurateReasons = DISPUTE_REASONS_INACCURATE;
  reasons: [IDisputeReasonCardPageItem?, IDisputeReasonCardPageItem?] = [];

  constructor() {}

  get currentView(): viewState {
    return this.viewState[this.viewState.length];
  }

  ngOnInit(): void {}

  /**
   * Changes the "selected" state flag of the target option.
   * @param index - The position inside of the option array
   * @example
   *
   *   switchOption(1); // Switch or Swap the values of the option in position 1.
   */
  switchOption(itemIndex: number, options: IDisputeReasonCardPageItem[]): void {
    // const isCustomInput = options[itemIndex].allowUserInput;
    // const isSelected = indexInSelectedArr !== -1;
    // if (isSelected) {
    //   this.selectedIndexes.splice(indexInSelectedArr, 1);
    //   if (isCustomInput) {
    //     this.isCustomInputSelected = false;
    //   }
    // } else {
    //   if (isCustomInput) {
    //     this.selectedIndexes = [];
    //     this.selectedIndexes.push({ pageIndex, itemIndex });
    //     this.isCustomInputSelected = true;
    //   } else {
    //     if (this.isCustomInputSelected) {
    //       this.showCustomInputError = true;
    //     } else {
    //       const isLimitReached = this.isLimitOfSelectionReached();
    //       if (!isLimitReached) {
    //         this.selectedIndexes.push({ pageIndex, itemIndex });
    //       } else {
    //         this.showMaxError = true;
    //       }
    //     }
    //   }
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(() => {
    //     this.showMaxError = false;
    //     this.showCustomInputError = false;
    //   }, 3000);
    // }
  }

  // private findIndexInSelected(itemIndex: number): number {
  //   return this.selectedIndexes.findIndex(
  //     (indexObj) => indexObj.pageIndex === pageIndex && indexObj.itemIndex === itemIndex,
  //   );
  // }

  // isSelected(itemIndex: number): boolean {
  //   return this.findIndexInSelected(itemIndex) !== -1;
  // }

  // getTargetSelectedPageItem(indexObj: IDisputeSelectedObj): IDisputeReasonCardPageItem {
  //   return this.reasonOptionPages[indexObj.pageIndex].items[indexObj.itemIndex];
  // }

  // getCurrentNavigationIndex(): number {
  //   const navStackLength = this.navigationStack.length;
  //   return navStackLength === 0 ? 0 : navStackLength - 1;
  // }

  // getLastNavigationStackId(): string {
  //   return this.navigationStack[this.navigationStack.length - 1].id;
  // }

  addSelection(reason: IDisputeReasonCardPageItem): void {
    this.reasons = this.reasons.length > 0 ? [this.reasons[0], reason] : [reason];
  }

  removeSelection(idx: number): void {
    this.reasons.splice(idx, 1);
    this.reasons = [...this.reasons];
  }

  // private isLimitOfSelectionReached(): boolean {
  //   const max = maxSelectedItemAmount;
  //   const numberOfSelectedReasons = this.selectedIndexes.length;
  //   return numberOfSelectedReasons >= max;
  // }

  // onSwipe(e: any): void {
  //   if (e.type === 'swipe') {
  //     if (this.basePagination !== undefined) {
  //       let direction: TBasePaginationNavigationDirection | undefined = 'forward';
  //       if (e.offsetDirection === 2) {
  //         direction = 'forward';
  //       } else if (e.offsetDirection === 4) {
  //         direction = 'back';
  //       }
  //       this.basePagination.navigate(direction);
  //     }
  //   }
  // }

  onRadioChanges(event: any): void {
    this.disputeType = event.target.value;
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
      this.selectedIndexes = [];
      this.customReason = '';
      this.isCustomInputSelected = false;
      this.disputeType = '';
    }
  }

  sendDispute(): void {
    // this.disputeProcessResult.emit({
    //   isFinished: true,
    //   data: {
    //     hasCustomInput: this.isCustomInputInSelectedArr(),
    //     customInput: this.customReason,
    //     reasonsId: this.parseSelectedItemsToIdArray(),
    //     reasons: this.parseSelectedReasonsToArray(),
    //   },
    // });
  }

  // parseSelectedItemsToIdArray(): [string?, string?] {
  //   let resultArr: [string?, string?] = [];
  //   this.selectedIndexes.forEach((item) => {
  //     const target = this.getTargetSelectedPageItem(item);
  //     resultArr.push(target.reason.id);
  //   });
  //   return resultArr;
  // }

  // parseSelectedReasonsToArray(): [IDisputeReason?, IDisputeReason?] {
  //   let resultsArr: [IDisputeReason?, IDisputeReason?] = [];
  //   let reasonIds: [string?, string?] = this.parseSelectedItemsToIdArray(); // never more than two...switch to tuple
  //   let reasons = [...this.processReasons]; // this is filtering out the other items

  //   reasonIds.filter(Boolean).forEach((item) => {
  //     const reason = reasons.find((r) => r.id === item);
  //     if (reason?.claimCode) resultsArr.push(reason);
  //   });
  //   return resultsArr;
  // }

  // isCustomInputInSelectedArr(): boolean {
  //   let result: boolean = false;
  //   this.selectedIndexes.forEach((item) => {
  //     const target = this.getTargetSelectedPageItem(item);
  //     if (target.allowUserInput === true) {
  //       result = true;
  //     }
  //   });

  //   return result;
  // }

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
