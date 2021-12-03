import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralPureView } from './referral-pure.view';

describe('ReferralPureView', () => {
  let component: ReferralPureView;
  let fixture: ComponentFixture<ReferralPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
