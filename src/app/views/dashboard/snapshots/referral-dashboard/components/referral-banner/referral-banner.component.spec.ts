import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DOMHelper } from '@testing/dom-helper';

import { ReferralBannerComponent } from './referral-banner.component';

describe('ReferralBannerComponent', () => {
  let component: ReferralBannerComponent;
  let fixture: ComponentFixture<ReferralBannerComponent>;

  let dh: DOMHelper<ReferralBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  beforeEach(() => {
    component.disabled = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show only 1 h6 if the referral program is enabled', () => {
    const result = dh.count('h6');

    expect(result).toEqual(1);
  });
});
