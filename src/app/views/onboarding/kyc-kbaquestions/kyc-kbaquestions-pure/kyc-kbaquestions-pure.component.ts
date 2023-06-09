import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { KbaquestionsFormComponent } from '@shared/components/forms/kbaquestions-form/kbaquestions-form.component';
import { ITransunionKBAQuestion } from '@shared/interfaces/tu-kba-questions.interface';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-kbaquestions-pure',
  templateUrl: './kyc-kbaquestions-pure.component.html',
})
export class KycKbaquestionsPureComponent extends KycBaseComponent {
  @ViewChild(KbaquestionsFormComponent) kba: KbaquestionsFormComponent | undefined;
  @ViewChild(FilledSpinningButtonComponent) btn: FilledSpinningButtonComponent | undefined;
  @Input() kbas: ITransunionKBAQuestion[] = [];
  @Output()
  onClickAnswer: EventEmitter<ITransunionKBAQuestion> = new EventEmitter();

  constructor() {
    super();
  }
}
