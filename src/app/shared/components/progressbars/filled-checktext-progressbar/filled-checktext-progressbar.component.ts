import { Component, Input, OnInit } from '@angular/core';

export interface IProgressStep {
  id: number;
  active: boolean;
  complete: boolean;
  name: string;
}
export interface IFilledChecktextProgressbarConfig {
  size: string;
}

@Component({
  selector: 'brave-filled-checktext-progressbar',
  templateUrl: './filled-checktext-progressbar.component.html',
})
export class FilledChecktextProgressbarComponent {
  @Input() config: IFilledChecktextProgressbarConfig = { size: 'base' };
  @Input() steps: IProgressStep[] = [];
  public stack: IProgressStep[] = [];

  constructor() {}

  /**
   * Sets the current step in the stack to complete and moves to next step
   */
  completeCurrentStep(): void {
    let current = this.stack[this.stack.length - 1];
    if (current) {
      current = {
        ...current,
        complete: true,
      };
      this.stack[this.stack.length - 1] = current;
      this.moveNext();
    }
  }

  /**
   * Sets the next step to active and adds the next step to the stack
   *  - last step in the stack is the current step
   * @returns {IProgressStep | undefined}
   */
  moveNext(): IProgressStep | undefined {
    this.steps[this.stack.length].active = true;
    this.stack = [...this.stack, this.steps[this.stack.length]];
    return this.steps[this.stack.length];
  }

  /**
   * Pops the last step off the stack and sets it to inactive in the steps
   * @returns {IProgressStep | undefined} Of the one removed
   */
  moveBack(): IProgressStep | undefined {
    let step = this.stack.pop();
    this.stack = [...this.stack];
    return step;
  }

  /**
   * Jumps to the first step
   * @returns {void}
   */
  goToFirst(): void {
    this.stack = [];
  }
}
