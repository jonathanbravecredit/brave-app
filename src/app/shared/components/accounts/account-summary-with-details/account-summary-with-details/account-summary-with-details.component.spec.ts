import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryWithDetailsComponent } from './account-summary-with-details.component';

describe('AccountSummaryWithDetailsComponent', () => {
  let component: AccountSummaryWithDetailsComponent;
  let fixture: ComponentFixture<AccountSummaryWithDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSummaryWithDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryWithDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
