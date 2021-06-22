import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAccountSummaryComponent } from './trade-account-summary.component';

describe('TradeAccountSummaryComponent', () => {
  let component: TradeAccountSummaryComponent;
  let fixture: ComponentFixture<TradeAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeAccountSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
