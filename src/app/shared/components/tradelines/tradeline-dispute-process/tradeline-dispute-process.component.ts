import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IDisputeTradelineReasonCard } from '@shared/components/cards/reason-card/interfaces';
import { BasePaginationComponent } from '@shared/components/paginations/base-pagination/base-pagination.component';
import { TBasePaginationNavigationDirection } from '@shared/components/paginations/base-pagination/interfaces';
import { MOCK_TRADELINE_DISPUTE_PROCESS_REASONS as reasonPages } from './constants';
import { IDisputeTradelineReasonCardPage, IDisputeTradelineSelectedObj } from './interfaces';
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
  reasonOptionPages: IDisputeTradelineReasonCardPage[] = reasonPages;
  selectedIndexes: IDisputeTradelineSelectedObj[] = [];
  navigationStack: any[] = [];
  isCustomInputSelected = false;
  showCustomInputError = false;
  showMaxError = false;
  constructor() { }

  ngOnInit(): void {
    // Set the pages to default;
    this.navigationStack.push({
      id: 'reason'
    });
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

  getTargetSelectedCard(indexObj: IDisputeTradelineSelectedObj): IDisputeTradelineReasonCard {
    return this.reasonOptionPages[indexObj.pageIndex].items[indexObj.itemIndex];
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

  getLastNavigationStackId(): string {
    return this.navigationStack[this.navigationStack.length - 1].id;
  }

  goToSummary(): void {
    if (this.selectedIndexes.length > 0) {
      this.navigationStack.push({
        id: 'summary'
      });
    }
  }

  goBack(): void {
    this.navigationStack.pop();
  }
}
