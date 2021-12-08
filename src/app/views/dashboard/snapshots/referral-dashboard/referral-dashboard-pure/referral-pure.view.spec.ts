import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ReferralDashboardPureView} from './referral-pure.view'

describe('ReferralPureView', () => {
  let component: ReferralDashboardPureView
  let fixture: ComponentFixture<ReferralDashboardPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralDashboardPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralDashboardPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
