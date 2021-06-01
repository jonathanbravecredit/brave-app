import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of } from 'rxjs';

export type Status = 'excellent' | 'good' | 'okay' | 'poor';

@Component({
  selector: 'brave-creditcard-card',
  templateUrl: './creditcard-card.component.html',
})
export class CreditcardCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> | undefined = of(false);
  @Input() status: Status = 'good';

  constructor() {}

  ngAfterViewInit(): void {
    this.open$ = this.viewDetail?.open$.asObservable();
  }
}
