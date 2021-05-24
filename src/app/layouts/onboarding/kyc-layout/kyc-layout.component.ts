import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FilledChecktextProgressbarComponent,
  IFilledChecktextProgressbarConfig,
} from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';

@Component({
  selector: 'brave-kyc-layout',
  templateUrl: './kyc-layout.component.html',
})
export class KycLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild(FilledChecktextProgressbarComponent)
  progressBar: FilledChecktextProgressbarComponent | undefined;
  public progressConfig: IFilledChecktextProgressbarConfig = {
    size: 'base',
    steps: [
      { active: false, complete: false, name: 'Name' },
      { active: false, complete: false, name: 'Address' },
      { active: false, complete: false, name: 'Identity' },
      { active: false, complete: false, name: 'Verify' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.progressBar?.goToFirst();
  }
}
