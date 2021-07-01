import { Component, Input, OnInit } from '@angular/core';
import { IDisputeTradelineReasonCard } from '@shared/components/cards/reason-card/interfaces';

@Component({
  selector: 'brave-tradeline-dispute-process',
  templateUrl: './tradeline-dispute-process.component.html',
  styleUrls: ['./tradeline-dispute-process.component.css']
})
export class TradelineDisputeProcessComponent implements OnInit {
  /**
   * The position inside of the option array
   */
  @Input() reasonOptions: IDisputeTradelineReasonCard[] = [];
  selectedIndexes: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Changes the "selected" state flag of the target option.
   * @param index - The position inside of the option array
   * @example
   *
   *   switchOption(1); // Switch or Swap the values of the option in position 1.
   */
  switchOption(index: number): void {
    const isSelected = this.isSelected(index);
    if (isSelected) {
      const indexOfOptionInArray = this.selectedIndexes.findIndex((i) => i === index);
      this.selectedIndexes.splice(indexOfOptionInArray, 1);
    } else {
      this.selectedIndexes.push(index);
    }
  }

  /**
   * Returns true if is selected or false if is not.
   * @param index - The position inside of the option array
   * @example
   *
   *   switchOption(1); // Switched to true.
   *   isSelected(1); // Returns true.
   */
  isSelected(index: number): boolean {
    return this.selectedIndexes.includes(index);
  }

  onSwipe(e: any): void {
    console.log(e);
  }
}
