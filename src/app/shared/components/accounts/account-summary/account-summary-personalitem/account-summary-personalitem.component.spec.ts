import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryPersonalitemComponent } from './account-summary-personalitem.component';

describe('AccountSummaryPersonalitemComponent', () => {
  let component: AccountSummaryPersonalitemComponent;
  let fixture: ComponentFixture<AccountSummaryPersonalitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSummaryPersonalitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSummaryPersonalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
