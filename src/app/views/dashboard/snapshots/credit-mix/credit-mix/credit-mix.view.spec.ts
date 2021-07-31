import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixView } from './credit-mix.view';

describe('CreditMixView', () => {
  let component: CreditMixView;
  let fixture: ComponentFixture<CreditMixView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
