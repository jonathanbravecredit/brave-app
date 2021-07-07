import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';
import { BasePaginationComponent } from '@shared/components/paginations/base-pagination/base-pagination.component';
import { TBasePaginationNavigationDirection } from '@shared/components/paginations/base-pagination/interfaces';
import { DEFAULT_TRADELINE_REASONS as defaultReasons } from './constants';
import { IDisputeTradelineProcessResult, IDisputeTradelineReasonCardPage, IDisputeTradelineReasonCardPageItem, IDisputeTradelineSelectedObj } from './interfaces';
import { TRADELINE_DISPUTES_NUMBER_OF_MAXIMUM_SELECTED_REASONS as maxSelectedItemAmount } from './settings';

@Component({
  selector: 'brave-tradeline-dispute-process',
  templateUrl: './tradeline-dispute-process.component.html',
  styleUrls: ['./tradeline-dispute-process.component.css']
})
export class TradelineDisputeProcessComponent implements OnInit {
  timeout: any;
  @ViewChild(BasePaginationComponent) basePagination: BasePaginationComponent | undefined;
  /**
   * The array of pages and child items inside of them that displays the reason cards.
   */
  reasonOptionPages: IDisputeTradelineReasonCardPage[] = [];
  selectedIndexes: IDisputeTradelineSelectedObj[] = [];
  private navigationStack: any[] = [];
  isCustomInputSelected = false;
  showCustomInputError = false;
  showMaxError = false;
  customReason: string = '';
  @Input() disputeType: string | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Output() disputeProcessResult: EventEmitter<IDisputeTradelineProcessResult> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // Set the pages to default;
    this.navigationStack.push({
      id: this.initialStepId,
      data: undefined
    });

    this.reasonOptionPages = this.disputeType === 'not-mine' ? defaultReasons.NOT_MINE : defaultReasons.INACCURATE;
  }
  /**
   * Changes the "selected" state flag of the target option.
   * @param index - The position inside of the option array
   * @example
   *
   *   switchOption(1); // Switch or Swap the values of the option in position 1.
   */
  switchOption(pageIndex: number, itemIndex: number): void {
    const isCustomInput = this.reasonOptionPages[pageIndex].items[itemIndex].allowUserInput
    const indexInSelectedArr = this.findIndexInSelected(pageIndex, itemIndex);
    const isSelected = indexInSelectedArr !== -1;
    if (isSelected) {
      this.selectedIndexes.splice(indexInSelectedArr, 1);
      if (isCustomInput) { 
        this.isCustomInputSelected = false;
      }
    } else {
      if (isCustomInput) {
        this.selectedIndexes = [];
        this.selectedIndexes.push({ pageIndex, itemIndex });
        this.isCustomInputSelected = true;
      } else {
        if (this.isCustomInputSelected) {
          this.showCustomInputError = true;
        } else {
          const isLimitReached = this.isLimitOfSelectionReached();
          if (!isLimitReached) {
            this.selectedIndexes.push({ pageIndex, itemIndex });
          } else {
            this.showMaxError = true;
          }
        }
      }
      
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.showMaxError = false;
        this.showCustomInputError = false;
      } ,3000)
    }
  }

  private findIndexInSelected(pageIndex: number, itemIndex: number): number {
    return this.selectedIndexes.findIndex((indexObj) => indexObj.pageIndex === pageIndex && indexObj.itemIndex === itemIndex);
  }

  isSelected(pageIndex: number, itemIndex: number): boolean {
    return this.findIndexInSelected(pageIndex, itemIndex) !== -1;
  }

  getTargetSelectedPageItem(indexObj: IDisputeTradelineSelectedObj): IDisputeTradelineReasonCardPageItem {
    return this.reasonOptionPages[indexObj.pageIndex].items[indexObj.itemIndex];
  }

  getCurrentNavigationIndex(): number {
    const navStackLength = this.navigationStack.length;
    return navStackLength === 0 ? 0 : navStackLength - 1;
  }

  private isLimitOfSelectionReached(): boolean {
    const max = maxSelectedItemAmount;
    const numberOfSelectedReasons = this.selectedIndexes.length;
    return numberOfSelectedReasons >= max;
  }

  onSwipe(e: any): void {
    if (e.type === 'swipe') {
      if (this.basePagination !== undefined) {
        let direction: TBasePaginationNavigationDirection | undefined = 'forward';
        if (e.offsetDirection === 2) {
          direction = 'forward';
        } else if (e.offsetDirection === 4) {
          direction = 'back';
        }
        this.basePagination.navigate(direction);
      }
    }
  }

  onRadioChanges(event: any): void {
    this.disputeType = event.target.value;
  }

  getLastNavigationStackId(): string {
    return this.navigationStack[this.navigationStack.length - 1].id;
  }

  goToReasons(): void {
    this.navigationStack.push({
      id: 'reason'
    });
  }

  goToSummary(): void {
    if (this.selectedIndexes.length > 0) {
      this.navigationStack.push({
        id: 'summary'
      });
    }
  }

  goBack(): void {
    const currentStackId = this.getLastNavigationStackId();
    if (currentStackId === 'reason') {
      this.selectedIndexes = [];
      this.customReason = '';
      this.isCustomInputSelected = false;
      this.disputeType = '';
    }

    this.navigationStack.pop();
  }

  sendDispute(): void {
    this.disputeProcessResult.emit(
      {
        isFinished: true,
        data: {
          hasCustomInput: this.isCustomInputInSelectedArr(),
          customInput: this.customReason,
          reasonsId: this.parseSelectedItemsToIdArray()
        }
      }
    )
  }

  parseSelectedItemsToIdArray(): string[] {
    let resultArr: string[] = [];

    this.selectedIndexes.forEach(item => {
      const target = this.getTargetSelectedPageItem(item);
      resultArr.push(target.reason.id);
    });

    return resultArr;
  }

  isCustomInputInSelectedArr(): boolean {
    let result: boolean = false;
    this.selectedIndexes.forEach(item => {
      const target = this.getTargetSelectedPageItem(item);
      if (target.allowUserInput === true) {
        result = true;
      }
    });

    return result;
  }
  
  getButtonConfig(): IFilledOnlyTextButtonConfig {
    let defaultConfig: IFilledOnlyTextButtonConfig = {
      buttonSize: 'base',
      backgroundColor: 'bg-indigo-800',
      activeColor: 'bg-indigo-900',
      color: 'text-white',
      full: false
    }

    if (this.disputeType !== undefined) {
      return defaultConfig;
    } else {
      defaultConfig.backgroundColor = 'bg-black';
      defaultConfig.activeColor = 'bg-black';
      return defaultConfig;
    }
  }
}
