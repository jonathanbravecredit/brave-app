import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralAmountLinkComponent } from './referral-amount-link.component';

describe('ReferralAmountLinkComponent', () => {
  let component: ReferralAmountLinkComponent;
  let fixture: ComponentFixture<ReferralAmountLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralAmountLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralAmountLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
