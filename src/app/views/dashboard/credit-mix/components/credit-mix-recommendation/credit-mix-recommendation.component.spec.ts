import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixRecommendationComponent } from './credit-mix-recommendation.component';

describe('CreditMixRecommendationComponent', () => {
  let component: CreditMixRecommendationComponent;
  let fixture: ComponentFixture<CreditMixRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
