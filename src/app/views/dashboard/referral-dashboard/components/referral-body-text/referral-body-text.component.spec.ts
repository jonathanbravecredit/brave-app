import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICampaign } from '@shared/interfaces/campaign.interface';

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

  it('should set addOn to 0 if addOnFlagOne is enrollment on init', () => {
    component.campaign = { addOnFlagOne: 'enrollment' } as ICampaign
    component.ngOnInit()
    expect(component.addOn).toEqual(0)
  })
});
