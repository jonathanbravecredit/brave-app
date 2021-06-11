import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'brave-negative-account-card',
  templateUrl: './negative-account-card.component.html',
  styleUrls: ['./negative-account-card.component.css']
})
export class NegativeAccountCardComponent implements OnInit, AfterViewInit {
  private $isIgnored = new BehaviorSubject(false);
  isIgnored = this.$isIgnored.asObservable();
  @Input() creditorName: string = '';
  @Input() lastReported: string = '';
  @Input() originalCreditor: string = '';
  @Input() originalCreditorValue: string = '';
  @Input() accountTypeDescription: string = '';
  @Input() accountTypeDescriptionValue: string = '';
  @Input() disputeFlag: string = '';
  @Input() disputeFlagValue: string = '';

  // Detail Information
  @Input() accountNumber = '';
  @Input() typeOfCollection = '';
  @Input() amountPastDue: number = 0;
  @Input() dateOpened = '20/02/2021';
  @Input() dateLastPayment = '20/02/2021';
  @Input() remarks = '';
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  open$: Observable<boolean> | undefined = of(false);

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.open$ = this.viewDetail?.open$.asObservable();
  }

  ignore() {
    this.$isIgnored.next(true);
  }

  undoIgnore() {
    this.$isIgnored.next(false);
  }
}
