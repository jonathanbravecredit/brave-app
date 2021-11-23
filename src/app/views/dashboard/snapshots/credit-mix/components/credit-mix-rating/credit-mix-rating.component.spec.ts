import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixRatingComponent } from './credit-mix-rating.component';

describe('CreditMixRatingComponent', () => {
  let component: CreditMixRatingComponent;
  let fixture: ComponentFixture<CreditMixRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
