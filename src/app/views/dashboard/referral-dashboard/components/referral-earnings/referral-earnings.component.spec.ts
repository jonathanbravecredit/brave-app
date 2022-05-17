import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IReferral } from '@shared/interfaces/referrals.interface';
import dayjs from 'dayjs';

import { ReferralEarningsComponent } from './referral-earnings.component';

describe('ReferralEarningsComponent', () => {
  let component: ReferralEarningsComponent;
  let fixture: ComponentFixture<ReferralEarningsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralEarningsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
