import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBannerComponent } from './referral-banner.component';

describe('ReferralBannerComponent', () => {
  let component: ReferralBannerComponent;
  let fixture: ComponentFixture<ReferralBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
