import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'brave-loan-card',
  templateUrl: './loan-card.component.html',
})
export class LoanCardComponent implements AfterViewInit {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> | undefined = of(false);

  constructor() {}

  ngAfterViewInit(): void {
    this.open$ = this.viewDetail?.open$.asObservable();
  }
}
