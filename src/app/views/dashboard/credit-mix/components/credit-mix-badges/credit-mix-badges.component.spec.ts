import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixBadgesComponent } from './credit-mix-badges.component';

describe('CreditMixBadgesComponent', () => {
  let component: CreditMixBadgesComponent;
  let fixture: ComponentFixture<CreditMixBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
