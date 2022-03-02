import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { HiddenAsteriskInputComponent } from '@shared/components/inputs/hidden-asterisk-input/hidden-asterisk-input.component';

@Component({
  selector: 'brave-ssn-full-form',
  templateUrl: './ssn-full-form.component.html',
  providers: [{ provide: 'name', useValue: 'ssnfull-form' }],
})
export class SsnFullFormComponent extends BaseFormComponent {
  @ViewChildren(HiddenAsteriskInputComponent)
  hiddenFields: QueryList<HiddenAsteriskInputComponent> | undefined;
  timeoutRef: any;
  childName: string = 'input';

  constructor(fb: FormBuilder) {
    super(fb, 'ssnfull-form');
  }

  formatChildName(childName: string, digit: number): string {
    return `${childName}-${digit}`;
  }

  /**
   * Moves to the component located at the index
   * @param idx
   */
  moveNext(idx: number): void {
    const comp = this.hiddenFields?.find((c, i) => i === idx + 1);
    if (comp) {
      setTimeout(() => {
        comp.focusMe();
      }, 100);
    }
  }

  /**
   * Clears out all the values from the form
   */
  clearForm(): void {
    this.hiddenFields?.forEach((c) => {
      c.clearMe();
    });
    this.hiddenFields?.first.focusMe(); // set the cursor to the first one
  }
}
