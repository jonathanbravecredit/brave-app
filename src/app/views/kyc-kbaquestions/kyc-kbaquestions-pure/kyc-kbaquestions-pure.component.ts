import { Component, Input } from '@angular/core';
import { ITransunionKBAQuestion } from '@shared/interfaces/tu-kba-questions.interface';
import { KycBaseComponent } from '@views/kyc-base/kyc-base.component';

@Component({
  selector: 'brave-kyc-kbaquestions-pure',
  templateUrl: './kyc-kbaquestions-pure.component.html',
})
export class KycKbaquestionsPureComponent extends KycBaseComponent {
  @Input() kbas: ITransunionKBAQuestion[] = [];
  constructor() {
    super();
  }
}
