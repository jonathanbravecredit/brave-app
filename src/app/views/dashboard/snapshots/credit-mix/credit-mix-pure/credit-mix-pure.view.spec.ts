import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixPureView } from './credit-mix-pure.view';

describe('CreditMixPureView', () => {
  let component: CreditMixPureView;
  let fixture: ComponentFixture<CreditMixPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
