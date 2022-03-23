import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryTradelineComponent } from './account-summary-tradeline.component';

describe('AccountSummaryTradelineComponent', () => {
  let component: AccountSummaryTradelineComponent;
  let fixture: ComponentFixture<AccountSummaryTradelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSummaryTradelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryTradelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
