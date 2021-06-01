import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'brave-creditcard-card',
  templateUrl: './creditcard-card.component.html',
})
export class CreditcardCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> | undefined = of(false);

  constructor() {}

  ngAfterViewInit(): void {
    this.open$ = this.viewDetail?.open$.asObservable();
    this.open$?.subscribe((val) => console.log(val));
  }
}
