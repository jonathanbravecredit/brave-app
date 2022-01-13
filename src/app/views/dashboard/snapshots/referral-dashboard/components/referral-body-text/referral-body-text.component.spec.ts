import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBodyTextComponent } from './referral-body-text.component';

describe('ReferralBodyTextComponent', () => {
  let component: ReferralBodyTextComponent;
  let fixture: ComponentFixture<ReferralBodyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralBodyTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralBodyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
