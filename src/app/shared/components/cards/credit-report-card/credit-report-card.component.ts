import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-card',
  templateUrl: './credit-report-card.component.html',
  styleUrls: ['./credit-report-card.component.css']
})
export class CreditReportCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;
  @Input() firstFieldName: string = '';
  @Input() firstFieldValue: string = '';
  @Input() secondFieldName: string = '';
  @Input() secondFieldValue: string = '';
  @Input() thirdFieldName: string = '';
  @Input() thirdFieldValue: string = '';
  @Input() status: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
