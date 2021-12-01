import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixCardComponent } from './credit-mix-card.component';

describe('CreditMixCardComponent', () => {
  let component: CreditMixCardComponent;
  let fixture: ComponentFixture<CreditMixCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});