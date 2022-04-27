import { Component } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-negative-account-initial',
  templateUrl: './negative-account-initial.component.html',
})
export class NegativeAccountInitialComponent {
  report: IMergeReport | undefined;

  constructor() {}
}
