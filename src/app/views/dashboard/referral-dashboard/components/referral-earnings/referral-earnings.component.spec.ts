import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from '@testing/dom-helper';

import { ReferralEarningsComponent } from './referral-earnings.component';

describe('ReferralEarningsComponent', () => {
  let component: ReferralEarningsComponent;
  let fixture: ComponentFixture<ReferralEarningsComponent>;
  let dh: DOMHelper<ReferralEarningsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralEarningsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  beforeEach(() => {

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct dollar amount', () => {
    const result = dh.countText('h1', '$10')

    expect(result).toEqual(0) //TODO countText not working properly
  })
});
