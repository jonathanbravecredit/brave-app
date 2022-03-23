import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryPublicitemComponent } from './account-summary-publicitem.component';

describe('AccountSummaryPublicitemComponent', () => {
  let component: AccountSummaryPublicitemComponent;
  let fixture: ComponentFixture<AccountSummaryPublicitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSummaryPublicitemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryPublicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
