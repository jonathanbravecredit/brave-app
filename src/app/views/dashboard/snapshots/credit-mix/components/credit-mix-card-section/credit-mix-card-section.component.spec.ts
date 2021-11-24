import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixCardSectionComponent } from './credit-mix-card-section.component';

describe('CreditMixCardSectionComponent', () => {
  let component: CreditMixCardSectionComponent;
  let fixture: ComponentFixture<CreditMixCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixCardSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
