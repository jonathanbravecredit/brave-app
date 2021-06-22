import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAccountSummaryPureComponent } from './trade-account-summary-pure.component';

describe('TradeAccountSummaryPureComponent', () => {
  let component: TradeAccountSummaryPureComponent;
  let fixture: ComponentFixture<TradeAccountSummaryPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeAccountSummaryPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAccountSummaryPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
